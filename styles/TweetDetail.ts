import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container2: {
    display: 'flex',
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom: 5,
  },
    container: {
      display: 'flex',
      color: 'white',
      flexDirection: 'column',
      padding: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: 'lightgrey',
    },
    nickNameContainer:{

    },
    username: {
      color: 'gray',
      // marginLeft: 5
    },
    name:{
      fontWeight: 'bold', 
      fontSize: 16
      // color: 'black',
    },
    userImage: {
      marginRight: 10,
      width:45 , 
      height: 45, 
      borderRadius: 50
    },
    mainContainer:{
      width: '100%',
      color: 'red',
    },
    content:{
      lineHeight: 22,
      marginTop: 5,  
      fontSize: 18,  
      fontWeight: '400',
    },
    image:{
      width: '95%',
      aspectRatio: '16 / 9',
      resizeMode: 'contain',
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