import { StatusBar } from 'expo-status-bar';

//react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//pages
import Home from './src/pages/Home/index'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
          <Stack.Screen name="Profile" options={{ headerShown: false }} component={Home} />
          <Stack.Screen name="AddComment" options={{ headerShown: false }} component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
