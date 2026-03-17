import { CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Create() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [facing, setFacing] = useState<"front" | "back">("back");

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, []);

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text>No camera access</Text>
      </View>
    );
  }

  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    router.push({
      pathname: "/create/ai-detection",
      params: {
        image: photo?.uri,
      },
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        facing={facing}
      />
      <View style={styles.bottom}>
        <TouchableOpacity onPress={takePhoto} activeOpacity={0.8}>
          <View style={styles.shutterOuter}>
            <View style={styles.shutterInner} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  shutterOuter: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  shutterInner: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: "white",
  },
});