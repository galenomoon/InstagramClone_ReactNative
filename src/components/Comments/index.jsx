import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

//utils
import MyPress from '../../utils/MyPress'

//styles
import Icon from 'react-native-vector-icons/Ionicons';

export default function Comments({ username, description, isCaption }) {
  const [like, setLike] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.username}>
        <Text style={styles.test}>{username.toLowerCase()}</Text>
        <Text style={styles.description}> {description}</Text>
      </Text>
      {!isCaption &&
        <MyPress
          onPress={() => setLike(!like)}
          children={
            <Icon
              name={`heart${like ? "" : "-outline"}`}
              color={`${like ? "#f2304a" : "#aaa"}`}
              style={{ padding: 10 }}
              size={13}
            />
          }
        />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    shadowColor: "#000",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  test: {
    marginRight: 5,
    marginVertical: 2,
    color: "#fff",
    fontWeight: "bold"
  },
  username: {
    flex: 1,
    alignItems: "flex-start",
    height: "100%",
    marginRight: 30

  },
  description: {
    flex: 1,
    color: "#f0f0f0",
    fontSize: 12,
  },
})