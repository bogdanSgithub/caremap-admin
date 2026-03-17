import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
  <SafeAreaProvider>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      <Stack.Screen name="create" options={{ headerBackButtonDisplayMode: 'minimal', headerTransparent: true, title: '' }}/>
      <Stack.Screen name="result" options={{ headerBackButtonDisplayMode: 'minimal', title: 'Complete Donation', headerShadowVisible: false }}/>
    </Stack>
  </SafeAreaProvider>);
}
