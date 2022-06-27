import { Image, StyleSheet, View, Text } from 'react-native'
import React from 'react'

//styles
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

//utils
import MyPress from '../../utils/MyPress';

export default function Story({ user, index }) {
  const username = user.username
  const profilePic = <Image source={{ uri: user.profilePic }} style={styles.picture} />

  return (
    <View style={{ justifyContent: 'flex-end', alignItems: "flex-end" }}>
      <MyPress
        children={index === 0 ?
          <View style={[styles.border, { padding: 2 }]}>
            {profilePic}
            <Text style={[styles.label, { top: 5 }]}>Your Story</Text>
          </View>
          :
          <View style={{ alignItems: 'center' }}>
            <LinearGradient colors={['#C13584', '#E1306C', '#FD1D1D', '#F56040', '#F77737', '#FCAF45', '#FFDC80']} style={styles.border}>
              {profilePic}
            </LinearGradient>
            <Text style={styles.label}>{username.substr(0, 10)}{username.length > 10 && "..."}</Text>
          </View>

        } />
      {index === 0 &&
        <View style={styles.plus}>
          <Icon
            name={'add'}
            color={`white`}
            size={16}
          />
        </View>
      }
    </View>

  )
}
const styles = StyleSheet.create({
  picture: {
    width: 72,
    height: 72,
    borderRadius: 100,
    borderWidth: 2
  },
  border: {
    padding: 2,
    borderRadius: 200,
    marginHorizontal: 7,
    marginVertical: 3,
    alignItems: 'center'
  },
  plus: {
    position: "absolute",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#405DE6',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 100,
    bottom: 20,
    right: 5,
  },
  label: {
    fontSize: 11,
    color: "#fff"
  }
})