import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function post({ post }) {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const name = <Text style={styles.text}>{post.nome.toLowerCase()}</Text>
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image style={styles.profilePic} source={{ uri: post.imgperfil }} />
            {name}
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Image style={styles.picture} source={{ uri: post.imgPublicacao }} />
      </View>
      <View style={styles.footer}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: 150, paddingVertical: 5 }}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            <Icon name={`heart${like ? "" : "-outline"}`} size={30} color={`${like ? "#f2304a" : "#fff"}`} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="chatbubble-outline" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ios-send" size={25} color="#fff" style={{ transform: [{ rotateZ: '-45deg' }] }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setSave(!save)}>
          <Icon name={`bookmark${save ? "" : "-outline"}`} size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={[styles.footer, { justifyContent: "flex-start", alignItems: 'baseline' }]}>
        <Text>   {name}</Text>
        <Text style={styles.description}> {post.descricao}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#444",
    shadowColor: "#000",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
  },
  footer: {
    flex: 1,
    backgroundColor: "#444",
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
    paddingBottom: 10,
  }
});