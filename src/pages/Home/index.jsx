import React from 'react';
import { StyleSheet, View } from 'react-native';

//components
import Feed from "../../components/Feed"
import Header from '../../components/Header';

export default function InstaGaleno() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.body}>
        <Feed />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingVertical: 25,
  },
  h1: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  }
});
