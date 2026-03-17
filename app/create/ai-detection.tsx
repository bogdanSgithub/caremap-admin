import { FOOD } from "@/data";
import { Feather } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function AIDetection() {
  const { image } = useLocalSearchParams(); // 👈 get image from camera
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
    <Stack.Screen options={{ headerBackButtonDisplayMode: 'minimal', headerTransparent: true, 
        title: 'AI Image Processing', headerTitleStyle: { color: 'white' },
        headerRight: () =>
        (<Pressable onPress={() => router.push({
              pathname: "/result",
              params: {
                image: image,
              },
            })} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Feather name="check" size={25} style={{ marginLeft: 4 }}/>
        </Pressable>)
            }}/>
      {/* SWITCH IMAGE BASED ON LOADING */}
      <Image
        source={
          loading
            ? { uri: image as string } // 👈 real photo first
            : require("../../assets/donuts.jpg") // 👈 fake AI result image
        }
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />

      {/* OVERLAY */}
      <View style={styles.overlay}>
        {loading ? (
          <>
            <ActivityIndicator size="large" color="white" />
            <Text style={styles.processingText}>
              Processing image...
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.title}>Detected: {FOOD.name}</Text>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  processingText: {
    marginTop: 16,
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  }
});