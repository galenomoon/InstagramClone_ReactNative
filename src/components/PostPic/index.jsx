import { StyleSheet, Image } from 'react-native'
import React from 'react'

//utils
import MyPress from '../../utils/MyPress'

//styles
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

const PostPicture = ({ postImage, setLike, like, setLoading, loading }) => {
  return (
    <>
      <MyPress
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
      <Image style={styles.picture} source={{ uri: postImage }} />
    </>
  )
}

export default PostPicture

const styles = StyleSheet.create({
  picture: {
    width: "100%",
    height: 300
  }
})