import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

//components
import Author from '../Author';
import Comments from '../Comments';
import PostActions from '../PostActions';
import PostPicture from '../PostPic';
import Stories from '../Stories';

//utils
import MyPress from '../../utils/MyPress';

export default function Post({ post, index }) {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentsLength, setCommentsLength] = useState(post.comments.length)
  const [hasComments, setHasComments] = useState(commentsLength > 0)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => loading && setLoading(false), 3000);
  }, [loading])

  return (<>
    {index === 0 &&
      <View style={styles.header}>
        <ScrollView horizontal={true}>
          <Stories />
        </ScrollView>
      </View>
    }
    <View style={{ marginVertical: 10 }}>
      <Author username={post.username} profilePic={post.profilePic} />
      <View>
        <PostPicture postImage={post.postImage} setLike={setLike} like={like} setLoading={setLoading} loading={loading} />
      </View>
      <View style={styles.footer}>
        <PostActions setLike={setLike} like={like} setSave={setSave} save={save} />
      </View>
      <Comments username={post.username} description={post.description} isCaption />
      <View style={{ flex: 1, borderBottomColor: "#333", borderWidth: 0.5, margin: 5 }} />
      {showComments ?
        post.comments.map((comment, idx) => <Comments username={comment.username} description={comment.comment} commentsLength={commentsLength} key={idx} />)
        :
        hasComments && <MyPress children={
          <Text style={styles.description}>View all {commentsLength} comments</Text>
        } onPress={() => setShowComments(!showComments)} />
      }
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    paddingHorizontal: 5,
    shadowColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  description: {
    flex: 1,
    color: "#a3a3a3",
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  header: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    shadowColor: '#000',
  },
});