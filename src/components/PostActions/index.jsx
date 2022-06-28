import React from 'react';
import { View } from 'react-native';

//utils
import MyPress from '../../utils/MyPress';

// navigation
import { useNavigation } from '@react-navigation/native';

//styles
import Icon from 'react-native-vector-icons/Ionicons';

export default function PostActions({ setLike, like, setSave, save , comments, author}) {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: 150, paddingVertical: 5 }}>
        <MyPress onPress={() => setLike(!like)} children={<Icon name={`heart${like ? "" : "-outline"}`} size={30} color={`${like ? "#f2304a" : "#fff"}`} />} />
        <MyPress onPress={() => navigation.navigate("Comments", { comments, author }) } children={<Icon name="chatbubble-outline" size={30} color="#fff" />} />
        <MyPress children={<Icon name="paper-plane-outline" size={30} color="#fff" />} />
      </View>
      <MyPress onPress={() => setSave(!save)} children={<Icon name={`bookmark${save ? "" : "-outline"}`} size={30} color="#fff" />} />
    </>
  );
}
