import CustomMarker from "@/components/CustomMarker";
import { getStatusForPlaceId, statusToColor } from "@/components/placeStatus";
import { PRIMARY_COLOR } from "@/constants";
import { PLACES } from "@/data";
import { Place } from "@/types/place";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";

export default function HomeScreen() {
  const mapRef = useRef<MapView>(null);

  const [places, setPlaces] = useState<Place[]>(PLACES);

   const userRegionRef = useRef<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 44.2312,
    longitude: -76.486,
  });

  return (
    <View style={styles.container}>
  <MapView
    ref={mapRef}
    showsUserLocation={true}
    onUserLocationChange={(e) => {
      const coordinate = e.nativeEvent.coordinate;
      if (!coordinate) return;
      const { latitude, longitude } = coordinate;
      userRegionRef.current = { latitude, longitude };
    }}
    showsPointsOfInterest={false}
    style={StyleSheet.absoluteFill}
    initialRegion={{
      latitude: 44.2312,
      longitude: -76.486,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    }}
  >
    {places.map((place) => {
      const status = getStatusForPlaceId(place.id);
      const bgColor = statusToColor(status);

      return (
        <CustomMarker
          key={place.id}
          onPress={() => {}}
          place={place}
          latitude={place.latitude}
          longitude={place.longitude}
          color={bgColor}
        />
      );
    })}
  </MapView>

  {/* 👇 BIG BUTTON */}
  <TouchableOpacity style={styles.bigButton} onPress={() => router.push('/create')}>
    <Text style={styles.bigButtonText}>Donate Now</Text>
  </TouchableOpacity>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bigButton: {
    position: "absolute",
    bottom: 100, // space from bottom
    left: 20,
    right: 20, // makes it stretch full width with margin
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
  },

  bigButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});