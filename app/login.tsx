import { Link, router } from 'expo-router';
import * as React from 'react';
import { Text,TextInput,View, Image,ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon,Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';


// const imgbg = require('../assets/hamburger-895831_1280.jpg');

export default function login(){
    return (
        <ImageBackground 
            style={styles.container} 
            src='https://c4.wallpaperflare.com/wallpaper/65/575/693/game-poster-doom-eternal-doom-slayer-hd-wallpaper-preview.jpg'
            >

            <View style={styles.containerTitle}>
                <Text style={styles.textTitle1}>TAKANAKUQ</Text>
                <Text style={styles.textTitle2}>KUNA</Text>
            </View>
            <View style={styles.containerInputs}>
                <TextInput style={styles.textInput} placeholder={'Ingrese el nombre de usuario'}/>
                <TextInput style={styles.textInput} secureTextEntry={true} placeholder={'Ingrese su contraseña'}/>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)')}>
                    <Text style={styles.textbutton}>Iniciar Sesion</Text>
                    {/* Iniciar Sesion */}
                </TouchableOpacity>
                <Text style={styles.textRegister}>Todavia no tienes una contaseña? <Text style={styles.linkTextRegister}><Link href={'/register'}>Registrarse</Link></Text></Text>    
            </View>            
        </ImageBackground>
    );
  }


const styles = StyleSheet.create({
  container:{
    flex:1,
    display: 'flex',
    alignItems: 'stretch',
    resizeMode: 'cover',
    justifyContent: 'space-evenly',
},
  gradient: {
    flex:1
  },
  containerTitle:{
    position: 'relative',   
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '10%',

    // marginBottom: 30
    // backgroundColor: 'white'
  },
  textTitle1:{
    fontSize: 55,
    alignSelf: 'center',
    textAlign: 'center',
    zIndex: 1
    // backgroundColor: 'red',
    // position: 'relative',
    // right: 1
  },
  textTitle2: {
    zIndex: 1,  
    fontSize: 30,
    position: 'relative',
    left: 230,
    top: -30,
  },
  containerInputs:{
    // backgroundColor: 'yellow',
    // marginTop: 20,    
    alignItems: 'center',
    height: '15%',
    justifyContent: 'space-between',
  },
  textInput: {
    backgroundColor: 'white',
    width: '75%',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    fontWeight: '500',
    color: 'grey',
    margin: 15
  },
  button: {
    backgroundColor: 'orange',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 5,
    height: 40,
    width: '75%',
  },
  textbutton:{
    color: 'white',
    fontWeight: '900',
  },
  textRegister: {
    color: 'white',
    textAlign: 'center',
  },
  linkTextRegister:{
    color: 'orange',
    // fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
})