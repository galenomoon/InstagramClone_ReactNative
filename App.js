import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

//pages
import Home from './src/pages/Home/index'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
