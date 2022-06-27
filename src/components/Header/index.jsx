import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

//styles
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

// navigation
import { useNavigation } from '@react-navigation/native';

//utils
import MyPress from '../../utils/MyPress';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingHorizontal: 20 }]}>
        <MyPress children={<Image style={styles.logo} source={require('../../../assets/logo.svg.png')} tintColor="#fff" />} />
        <View style={styles.actions}>
          <MyPress onPress={() => navigation.navigate("AddPost") } children={<FontAwesome name={'plus-square-o'} size={29} color={'#fff'} />} />
          <MyPress children={<Ionicons name="send" size={20} color="#fff" />} />
        </View>
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
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    shadowColor: '#000',
  },
  logo: {
    width: 150,
    height: 50,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 90,
  }
})