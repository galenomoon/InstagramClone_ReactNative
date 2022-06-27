import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddPost = () => {
  return (
    <View style={styles.container}>
      <Text>AddPost</Text>
    </View>
  )
}

export default AddPost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingVertical: 25,
  }
});