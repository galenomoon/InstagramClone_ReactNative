import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

//libs
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';

//styles
import AntDesign from 'react-native-vector-icons/AntDesign';
import MyPress from '../../utils/MyPress';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const AddPost = () => {
  const [image, setImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const navigation = useNavigation()
  const preview = image && <Image source={{ uri: image }} style={styles.preview} />

  useEffect(() => {
  
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const back = () => {
    navigation.navigate("Home")
    Alert.alert("Access Denied")
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return back()
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      {!image && <Camera style={styles.camera} type={type}>
        <View style={[styles.buttonContainer, { bottom: 40 }]}>
          <MyPress
            onPress={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)}
            children={
              <View style={styles.button}>
                <Feather name='rotate-cw' color={"#FFF"} size={40} />
              </View>
            }
          />
          <MyPress
            onPress={pickImage}
            children={
              <View style={styles.button}>
                <AntDesign name='picture' color={"#FFF"} size={40} />
              </View>
            }
          />
        </View>
      </Camera>}
      <View style={styles.imgBox}>
        {preview}
      </View>
      {image &&
        <View style={[styles.buttonContainer, { height: 500, width: 400, }]}>
          <MyPress
            onPress={pickImage}
            children={
              <View style={styles.button}>
                <AntDesign name='camera' color={"#FFF"} size={40} />
              </View>
            }
          />
          <MyPress
            onPress={pickImage}
            children={
              <View style={styles.button}>
                <AntDesign name='picture' color={"#FFF"} size={40} />
              </View>
            }
          />
        </View>
      }
    </View>
  );
}
export default AddPost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  preview: {
    width: 400,
    height: 400,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 70,
  },
  camera: {
    height: "105%",
    width: "140%",
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: '#111',
    padding:10,
    borderRadius: 100
  }
});