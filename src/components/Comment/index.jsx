import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

//utils
import MyPress from '../../utils/MyPress'

//styles
import Icon from 'react-native-vector-icons/Ionicons';

export default function Comment({ comment, isCaption, isCommentPage }) {
  const [like, setLike] = useState();
  const [username, setUsername] = useState(comment.username);
  const [profilePic, setProfilePic] = useState(comment.profilePic);
  const [description, setdescription] = useState(comment.comment);

  profilePic
  return (
    <View style={styles.container}>
      <View style={[{ flexDirection: 'row' }, isCommentPage ? { marginBottom: 15, width: 370 } : { marginVertical: 2, width: 300 }]}>
        {isCommentPage && <Image source={{ uri: profilePic }} style={styles.picture} />}
        <Text style={styles.username}>
          <Text style={styles.test}>{username?.toLowerCase()}</Text>
          <Text style={styles.description}> {description}</Text>
        </Text>
      </View>
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
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    shadowColor: "#000",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  box: {
    flexDirection: "row",
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
  picture: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 2,
    marginHorizontal: 16,
  },
})