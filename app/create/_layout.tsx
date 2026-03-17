import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="ai-detection"/>
      <Stack.Screen name="index" options={{ headerBackButtonDisplayMode: 'minimal', headerTransparent: true, title: '' }}/>
    </Stack>);
}
