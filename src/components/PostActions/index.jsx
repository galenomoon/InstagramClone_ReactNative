import React from 'react';
import { View } from 'react-native';

//utils
import MyPress from '../../utils/MyPress';

//styles
import Icon from 'react-native-vector-icons/Ionicons';

export default function PostActions({ setLike, like, setSave, save }) {
  return (
    <>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: 150, paddingVertical: 5 }}>
        <MyPress onPress={() => setLike(!like)} children={<Icon name={`heart${like ? "" : "-outline"}`} size={30} color={`${like ? "#f2304a" : "#fff"}`} />} />
        <MyPress children={<Icon name="chatbubble-outline" size={30} color="#fff" />} />
        <MyPress children={<Icon name="paper-plane-outline" size={30} color="#fff" />} />
      </View>
      <MyPress onPress={() => setSave(!save)} children={<Icon name={`bookmark${save ? "" : "-outline"}`} size={30} color="#fff" />} />
    </>
  );
}