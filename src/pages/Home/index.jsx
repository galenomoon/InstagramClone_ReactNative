import React from 'react';
import { StyleSheet, View } from 'react-native';

//components
import Feed from "../../components/Feed"
import Header from '../../components/Header';

export default function InstaGaleno() {
  return (
    <View style={styles.container}>
      <Header />
      <Feed />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 25,
  }
});
