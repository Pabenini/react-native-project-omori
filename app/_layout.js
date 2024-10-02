import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    'ComingSoon-Regular': require('../assets/fonts/ComingSoon-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F2F2F2",
          borderBottomWidth: 0,
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily:  "ComingSoon-Regular",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ title: ""}} />
      <Stack.Screen name="whiteroom" options={{ title: "Whiteroom"}} />
      <Stack.Screen 
        name="about" 
        options={{ 
          title: "Headspace",
          headerStyle: { backgroundColor: "#6C0EFF" }, // Definindo a cor do cabeçalho para a tela "about"
          headerTintColor: "#FFF",
        }} 
      />
      <Stack.Screen name="singlePag/[id]" options={{ title: "" }} />
      <Stack.Screen name="albummm" options={{ title: "Album" }} />
    </Stack>
  );
}
