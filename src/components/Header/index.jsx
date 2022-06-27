import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

//styles
import Icon from 'react-native-vector-icons/Ionicons';

//utils
import MyPress from '../../utils/MyPress';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingHorizontal: 20 }]}>
        <MyPress children={<Image style={styles.logo} source={require('../../../assets/logo.png')} tintColor="#fff" />} />
        <MyPress style={styles.send} children={<Icon name="send" size={20} color="#fff" />} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  header: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    shadowColor: '#000',
  },
  logo: {
    transform: [{ scale: 1.2 }],
    marginLeft: 10
  }
})