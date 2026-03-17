import { PRIMARY_COLOR } from "@/constants";
import { FOOD } from "@/data";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Result() {
  const { image } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [food, setFood] = useState<any>(FOOD);

  const total =
    food?.items.reduce((sum: number, item: any) => sum + item.price * 3, 0) || 0;

  return (
    <View style={styles.container}>
      {/* IMAGE */}
      <Image source={require("../assets/donuts.jpg")} style={styles.image} />

      <>
          {/* TITLE */}
          <Text style={styles.title}>{food.name}</Text>

          {/* RECEIPT */}
          <View style={styles.receipt}>
            {food.items.map((item: any, index: number) => (
              <View key={index} style={styles.row}>
                <Text>{item.name} x{item.qty}</Text>
                <Text>${item.price}</Text>
              </View>
            ))}

            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={{ fontWeight: "bold" }}>Total</Text>
              <Text style={{ fontWeight: "bold" }}>${total}</Text>
            </View>
          </View>

          {/* DONATE BUTTON */}
          <TouchableOpacity style={styles.button} onPress={() => {
            router.replace('/(tabs)/home');
// Small delay lets the tab screen mount before presenting the sheet on top
setTimeout(() => router.push('/(tabs)/home/confirmation'), 100);
          }}>
            <Text style={styles.buttonText}>Donate</Text>
          </TouchableOpacity>
        </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 12,
    marginBottom: 20,
  },
  center: {
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  receipt: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: PRIMARY_COLOR,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: '700'
  },
});