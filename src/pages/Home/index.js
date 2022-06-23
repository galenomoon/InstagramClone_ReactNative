import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feed from './feed';
export default function InstaGaleno() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.logo} source={require('../../img/logo.png')} tintColor="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Feed />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingVertical: 25,
  },
  header: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    shadowColor: '#000',
  },
  body: {
    flex: 9,
  },
  h1: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  }
});
