import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

//styles
import Icon from 'react-native-vector-icons/Ionicons';

//utils
import MyTouchableOpacity from '../../utils/myTouchableOpacity';

export default function Header() {
  return (
    <View style={styles.header}>
      <MyTouchableOpacity children={<Image style={styles.logo} source={require('../../../assets/logo.png')} tintColor="#fff" />} />
      <MyTouchableOpacity children={<Icon name="send" size={20} color="#fff" />} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
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