import { StyleSheet, TextInput, View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import MyPress from '../../utils/MyPress'

const Login = () => {
  const [isLogin, setIsLogin] = useState(false)
  const inputs = !isLogin ?
    [{ placeholder: "E-mail" }, { placeholder: "Username" }, { placeholder: "Password", secureTextEntry: true }, { placeholder: "Confirm Password", secureTextEntry: true },] :
    [{ placeholder: "E-mail" }, { placeholder: "Password", secureTextEntry: true }]
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/logo.svg.png')} tintColor="#fff" />
      <View style={styles.formContainer}>
        {inputs.map((input, index) =>
          <TextInput
            style={styles.input}
            placeholder={input.placeholder}
            placeholderTextColor="#aaa"
            secureTextEntry={input.secureTextEntry || false}
            key={index}
          />
        )}
      </View>
      <MyPress style={styles.btn} children={<Text style={styles.label} >{isLogin ? "Login" : "Sign up"}</Text>} />
      <Text style={{ color: '#aaa' }} >{isLogin ? "Não" : "Já"} tem uma conta?</Text>
      <Text style={{ color: '#1f7DE6' }} onPress={() => setIsLogin(!isLogin)}>Clique Aqui!</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 50,
    margin: 20
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#333',
    width: 300,
    padding: 7,
    borderRadius: 8,
    marginVertical: 10,
    color: '#fff'
  },
  label: {
    color: '#fff',
    padding: 7,
    textAlign: 'center',
    backgroundColor: "#1f7DE6"
  },
  btn: {
    width: 300,
    marginVertical: 20,
    justifyContent: 'center'
  }
})