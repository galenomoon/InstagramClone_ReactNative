import { View, Image, StyleSheet, Text } from 'react-native'
import React from 'react'

//utils
import MyPress from '../../utils/MyPress';

//styles
import Icon from 'react-native-vector-icons/Ionicons';

export default function Author({ username, profilePic }) {
  return (
    <View style={styles.header}>
      <View style={styles.center}>
        <MyPress children={<Image style={styles.profilePic} source={{ uri: profilePic }} />} />
        <MyPress children={<Text style={{ color: "#fff", fontWeight: "bold" }}>{username.toLowerCase()}</Text>} />
      </View>
      <MyPress children={<Icon name="ellipsis-vertical" size={20} color="#fff" />} />
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    shadowColor: "#000",
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  center: { flexDirection: "row", alignItems: "center" },
  footer: {
    flex: 1,
    paddingHorizontal: 5,
    shadowColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginHorizontal: 10
  }
});