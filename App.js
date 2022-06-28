import { StatusBar } from 'expo-status-bar';

//react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages
import Home from './src/pages/Home/index'
import AddPost from './src/pages/AddPost';
import Profile from './src/pages/Profile';
import Comments from './src/pages/Comments';

//styles
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//components
import { HeaderWithArrowBack } from './src/components/Header';
import Login from './src/pages/Login';

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
          if (route.name === 'AddPost') return <FontAwesome name={'plus-square-o'} size={29} color={'#fff'} />
        },
        tabBarButton: ['Login', 'Comments'].includes(route.name) ? () => null : undefined,
        tabBarActiveTintColor: 'white', tabBarInactiveTintColor: 'white', tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#111", borderTopWidth: 0, height: 50, }
      })}>
        <Tab.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Tab.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Tab.Screen name="Search" options={{ headerShown: false }} component={Home} />
        <Tab.Screen name="AddPost" component={AddPost} options={{ headerTitle: () => <HeaderWithArrowBack title="Add a Post" />, headerStyle: { backgroundColor: '#111' } }} />
        <Tab.Screen name="Profile" options={{ headerTitle: () => <HeaderWithArrowBack title="Profile" exitButton />, headerStyle: { backgroundColor: '#111' } }} component={Profile} />
        <Tab.Screen name="Comments" component={Comments} options={{ headerTitle: () => <HeaderWithArrowBack title="Comments" />, headerStyle: { backgroundColor: '#111' } }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
