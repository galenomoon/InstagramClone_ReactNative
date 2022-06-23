import { FlatList } from "react-native";

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
      renderItem={({ item }) => <Post post={item} />}
    />
  )
}