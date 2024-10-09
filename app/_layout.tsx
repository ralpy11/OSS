import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'

export default function RootLayout() {

    useFonts({
        'outfit':require('./../assets/fonts/Poppins-Regular.ttf'),
        'outfit-medium':require('./../assets/fonts/Poppins-Medium.ttf'),
        'outfit-bold':require('./../assets/fonts/Poppins-Bold.ttf'),
    })
  return (
    <Stack screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="(tabs)" />
    </Stack>
  );
}