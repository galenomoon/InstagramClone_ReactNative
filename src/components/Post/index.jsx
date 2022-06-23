import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

//styles
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

//utils
import MyTouchableOpacity from '../../utils/myTouchableOpacity';

export default function Post({ post }) {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const [loading, setLoading] = useState(false);
  const username = <Text style={styles.text}>{post.username.toLowerCase()}</Text>

  useEffect(() => {
    setTimeout(() => loading && setLoading(false), 3000);
  }, [loading])

  return (
    <View style={{ marginVertical: 10 }}>
      <View style={styles.header}>
        <View style={styles.center}>
          <MyTouchableOpacity children={<Image style={styles.profilePic} source={{ uri: post.profilePic }} />} />
          <MyTouchableOpacity children={username} />
        </View>
        <MyTouchableOpacity children={<Icon name="ellipsis-vertical" size={20} color="#fff" />} />
      </View>
      <View style={styles.body}>

        <MyTouchableOpacity
          doubleClick
          onPress={() => [setLike(!like), setLoading(!like)]}
          style={{ position: 'absolute', zIndex: 23, height: '100%', width: '100%', justifyContent: 'center', }}
          children={
            loading && like &&
            <Animatable.Text animation={"bounceIn", "bounceOut"} duration={1500} easing="ease-out" style={{ textAlign: 'center' }}>
              <Icon name="heart" size={75} color={"#fff"} />
            </Animatable.Text>
          }
        />
        <Image style={styles.picture} source={{ uri: post.postImage }} />
      </View>
      <View style={styles.footer}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: 150, paddingVertical: 5 }}>
          <MyTouchableOpacity onPress={() => setLike(!like)} children={<Icon name={`heart${like ? "" : "-outline"}`} size={30} color={`${like ? "#f2304a" : "#fff"}`} />} />
          <MyTouchableOpacity children={<Icon name="chatbubble-outline" size={30} color="#fff" />} />
          <MyTouchableOpacity children={<Icon name="paper-plane-outline" size={30} color="#fff" />} />
        </View>
        <MyTouchableOpacity onPress={() => setSave(!like)} children={<Icon name={`bookmark${save ? "" : "-outline"}`} size={30} color="#fff" />} />
      </View>
      <View style={[styles.footer, { justifyContent: "flex-start", alignItems: 'baseline', marginHorizontal: 10 }]}>
        {username}
        <Text style={styles.description}> {post.description}</Text>
      </View>
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
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  picture: {
    width: "100%",
    height: 300
  },
  description: {
    color: "#f0f0f0",
    fontSize: 12,
  }
});