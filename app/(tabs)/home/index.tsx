import CustomMarker from "@/components/CustomMarker";
import { getStatusForPlaceId, statusToColor } from "@/components/placeStatus";
import { PLACES } from "@/data";
import { Place } from "@/types/place";
import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
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
          const status = getStatusForPlaceId(place.id); // Get random status for each place
          const bgColor = statusToColor(status); // Get color for marker
          return (
            <CustomMarker
              key={place.id}
              onPress={() => {}}
              place={place}
              latitude={place.latitude}
              longitude={place.longitude}
              color={bgColor} // Pass the color to CustomMarker
            />
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});