import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      color: 'white',
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      // borderBottomWidth: 0.6,
      borderColor: 'lightgrey',
      // backgroundColor: 'white'
    },
    username: {
      color: 'gray',
      marginLeft: 5
    },
    userImage: {
      width:50 , 
      height: 50, 
      borderRadius: 50
    },
    mainContainer:{
      marginLeft: 10,
      flex: 1,  
      // backgroundColor: 'white',
      color: 'red',
    },
    name:{
      fontWeight: '600', 
      // color: 'black',
    },
    content:{
      lineHeight: 20,
      marginTop: 5,    
      // color: 'black',
    },
    image:{
      width: '100%',
      aspectRatio: 16 / 9,
      marginTop: 10,
      borderRadius: 15
    },
    footer:{
      flexDirection: 'row',
      marginVertical: 4,
    },
    IconButton: {
      backgroundColor: 'red'
    },
    botomElement:{
      flex: 1
    }
  });