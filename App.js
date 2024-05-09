import { StyleSheet, Text, SafeAreaView } from "react-native";
import ProductListing from "./screens/ProductListing";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetails from "./screens/ProductDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="ProductListing" component={ProductListing} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


