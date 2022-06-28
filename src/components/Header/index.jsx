import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

//styles
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
          <MyPress onPress={() => navigation.navigate("AddPost")} children={<FontAwesome name={'plus-square-o'} size={29} color={'#fff'} />} />
          <MyPress children={<Ionicons name="send" size={20} color="#fff" />} />
        </View>
      </View>
    </View>
  )
}

export function HeaderWithArrowBack({ backTo, title, exitButton }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <MyPress onPress={() => navigation.navigate(backTo || "Home")} children={<AntDesign name="arrowleft" size={30} color="#fff" />} />
        <Text style={styles.title}>{title}</Text>
        {exitButton && <View style={{ width: 240, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
          <MyPress
            style={styles.exit}
            children={<Ionicons name="exit" color={"#FFF"} size={30} />}
            onPress={()=> navigation.navigate('Login')}
          />
        </View>}
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
  },
  title: {
    fontWeight: 'bold',
    color: "#fff",
    fontSize: 23,
    marginHorizontal: 20
  }

})