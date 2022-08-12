import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/login_logo.png'
import CustomInput from '../../components/CustomInput'

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>
      <CustomInput placeholder="Username" value={username} setValue={setUsername}></CustomInput>
      <CustomInput placeholder="Password" value={password} setValue={setPassword}></CustomInput>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    paddingTop: 30,
  },

  root: {
    alignItems: 'center',
    padding: 20,
  }
})

export default SignInScreen