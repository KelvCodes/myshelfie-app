import { Stack } from "expo-router";
import { Animated, Easing, StatusBar } from "react-native";
import GuestOnly from "../../components/Auth/GuestOnly";
import { UserProvider } from "../../contexts/UserContext";

export default function AuthLayout() {
  return (
    <GuestOnly>
    <UserProvider>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: ({ current, layouts }) => {
            const progress = current.progress;

            const translateXLeft = progress.interpolate({
              inputRange: [0, 1],
              outputRange: [-layouts.screen.width / 2, 0],
            });

            const translateXRight = progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width / 2, 0],
            });

            return {
              cardStyle: {
                transform: [
                  {
                    translateX: Animated.add(
                      translateXLeft,
                      translateXRight
                    ).interpolate({
                      inputRange: [-layouts.screen.width, 0, layouts.screen.width],
                      outputRange: [-layouts.screen.width, 0, layouts.screen.width],
                    }),
                  },
                ],
              },
            };
          },
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 600,
                easing: Easing.out(Easing.poly(5)),
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 600,
                easing: Easing.in(Easing.poly(5)),
              },
            },
          },
        }}
      >
        <Stack.Screen 
          name="login" 
          options={{ 
            headerStyle: { backgroundColor: '#201e2b' },
            headerShown: true, 
            headerTitle: "Login", 
          }} 
        />
        <Stack.Screen 
          name="register" 
          options={{ 
            headerStyle: { backgroundColor: '#201e2b' },
            headerShown: true,
            headerTitle: "Register",
          }} 
        />
      </Stack>
    </UserProvider>
    </GuestOnly>
  );
}
