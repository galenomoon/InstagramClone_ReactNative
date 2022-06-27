import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

// navigation
import { useRoute } from '@react-navigation/native';

const Comments = () => {
  const route = useRoute().params;
  const [comments, setComments ] = useState()

  return (
    <View style={styles.container}>
 <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={route?.comments}
      renderItem={({ item, index }) => <Text key={index} style={styles.comment}>{item.comment}</Text>}
    />
    </View>
  )
}

export default Comments

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingVertical: 25,
  },
  comment:{
    color: "#fff",
    fontSize: 20
  }
});