import { PRIMARY_COLOR } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function VolunteerStatusCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Success Icon */}
        <View style={styles.iconContainer}>
          <Ionicons name="checkmark-circle" size={48} color={PRIMARY_COLOR} />
        </View>

        {/* Title */}
        <Text style={styles.title}>Tax Receipt Sent!</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          A volunteer is on the way to pick up your items.
        </Text>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Status Row */}
        <View style={styles.statusRow}>
          <Ionicons name="bicycle" size={20} color="#555" />
          <Text style={styles.statusText}>Volunteer coming</Text>
        </View>

        {/* Track Button */}
        <Pressable style={styles.button}>
          <Ionicons name="map" size={18} color="white" />
          <Text style={styles.buttonText}>Track Volunteer</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 6,
  },
  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 20,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
    justifyContent: "center",
  },
  statusText: {
    fontSize: 15,
    color: "#444",
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 14,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});