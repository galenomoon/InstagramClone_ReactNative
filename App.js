import { StatusBar } from 'expo-status-bar';

//react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages
import Home from './src/pages/Home/index'
import AddPost from './src/pages/AddPost';

//styles
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Comments from './src/pages/Comments';

//components
import { HeaderWithArrowBack } from './src/components/Header';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          if (route.name === 'Home') return <Foundation name={'home'} size={33} color={color} />;
          if (route.name === 'Profile') return <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} size={33} color={color} />;
          if (route.name === 'Search') return <Ionicons name={focused ? 'search' : 'search-outline'} size={33} color={color} />;
        },
        tabBarButton: ['AddPost', 'Comments'].includes(route.name) ? () => null : undefined,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#111",
          borderTopWidth: 0
        }
      })}>
        <Tab.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Tab.Screen name="Search" options={{ headerShown: false }} component={Home} />
        <Tab.Screen name="Profile" options={{ headerShown: false }} component={Home} />
        <Tab.Screen name="AddPost" options={{ headerShown: false }} component={AddPost} />
        <Tab.Screen name="Comments"
          options={{
            headerTitle: () => <HeaderWithArrowBack backTo={"Home"} title={"Comments"} />,
            headerStyle: { backgroundColor: '#111' }
          }}
          component={Comments}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
