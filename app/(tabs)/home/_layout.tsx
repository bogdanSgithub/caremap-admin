import { router, Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
  <SafeAreaProvider>
    <Stack>
      <Stack.Screen name="index" options={{ headerTransparent: true, headerTitle: '',
        headerRight: () => 
        (<Pressable style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onPress={() => router.push('/create')}>
            <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>Donate Now</Text>
        </Pressable>)
        }}/>
        <Stack.Screen name="confirmation" options={{ headerTransparent: true, headerTitle: '',
        presentation: 'formSheet',
        sheetAllowedDetents: [0.38],
          sheetInitialDetentIndex: 0,
        }}/>
    </Stack>
  </SafeAreaProvider>);
}
