import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTransparent: true, headerTitle: '',
        }}/>
        <Stack.Screen name="confirmation" options={{ headerTransparent: true, headerTitle: '',
        presentation: 'formSheet',
        sheetAllowedDetents: [0.38],
          sheetInitialDetentIndex: 0,
        }}/>
    </Stack>);
}
