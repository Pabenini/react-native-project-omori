import { Stack } from "expo-router";

export default function RootLayout() {
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
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ title: ""}} />
      <Stack.Screen name="whiteroom" options={{ title: "whiteroom"}} />
      <Stack.Screen name="singlePag/[id]" options={{ title: "" }} />
    </Stack>
  );
}
