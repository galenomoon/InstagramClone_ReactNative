import React, { useState } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

//libs
import * as ImagePicker from 'expo-image-picker';

//utils
import MyPress from '../../utils/MyPress';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View sttyle={styles.box}>
        <View style={styles.labels}>
          <MyPress
            children={image ? <Image source={{ uri: image }} style={styles.preview} onPress={pickImage} /> : <View style={styles.preview} />}
            onPress={pickImage}
          />
          <Text style={styles.username}> @guilhermegaleno_oficial </Text>
          <Text style={styles.email}> galeno@galeno.com </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  preview: {
    backgroundColor: '#aaa',
    width: 200,
    height: 200,
    borderRadius: 100
  },
  username: {
    color: "#FFF",
    fontWeight: 'bold',
    fontSize: 20
  },
  email: {
    color: "#aaa",
    fontSize: 15
  },
  labels: {
    justifyContent: 'space-between',
    height: 300,
    alignItems: 'center'
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})