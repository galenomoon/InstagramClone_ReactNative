import { FlatList, StyleSheet } from "react-native";

//components
import Post from "../Post";

//utils
import feedTest from "../../utils/feedTest";

export default function Feed() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={feedTest}
      renderItem={({ item, index }) => <Post post={item} index={index} />}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  header: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    shadowColor: '#000',
  },
  logo: {
    transform: [{ scale: 1.2 }],
    marginLeft: 10
  }
})