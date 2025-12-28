import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
      }}>
        {/* Groups */}
       
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />

        {/* Individual Screens */}
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </>
  )
}