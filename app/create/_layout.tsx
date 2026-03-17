import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="ai-detection" options={{ headerShown: false }}/>
      <Stack.Screen name="index" options={{ headerBackButtonDisplayMode: 'minimal', headerTransparent: true, title: '' }}/>
      <Stack.Screen name="result" options={{ headerBackButtonDisplayMode: 'minimal', title: 'Complete Donation', headerShadowVisible: false }}/>
    </Stack>);
}
