import React from 'react'
import { StyleSheet, View, TextInput, Image, Text } from 'react-native'

// navigation
import { useRoute } from '@react-navigation/native';

//components
import Comments from '../../components/Comments';
import MyPress from '../../utils/MyPress';

const CommentsPage = () => {
  const route = useRoute().params;

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Comments
          comments={route?.comments}
          isCommentPage
        />
      </View>
      <View style={styles.containerInput}>
        <Image style={styles.picture} source={{ uri: route?.author.profilePic }} />
        <TextInput
          style={styles.input}
          placeholder="Add a Comment..."
          placeholderTextColor="#aaa"
          multiline={true}
        />
        <MyPress children={
          <Text style={{ color: '#1f7DE6', fontWeight: 'bold' }} >
            Post
          </Text>
        }
          style={styles.post} />
      </View>
    </View>
  )
}

export default CommentsPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  post: {
    flex: 1,
    fontSize: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    height: "50%",
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    flex: 5,
    padding: 10,
    color: '#fff',
  },
  containerInput: {
    width: "100%",
    backgroundColor: '#333',
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 2,
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderColor: "#777"
  }
});