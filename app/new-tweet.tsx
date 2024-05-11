import { Image, StyleSheet, TextInput, View } from "react-native";
// import { Text, View } from "@/components/Themed";


const user = {
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
  }

export default function NewTweet(){
    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image src={user.image} style={styles.userImage}/> 
                <TextInput 
                    style={styles.inputText} 
                    placeholder={"Empieza por compartir algo!"} 
                    placeholderTextColor="gray" 
                    // cursorColor="grey"
                    multiline
                    numberOfLines={5}
                    
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        // backgroundColor: 'black',
    },
    userImage: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10,
        // marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        // color: 'red',
    },
    inputText: {
        flex: 1,
        color: 'grey',
        // backgroundColor: 'red',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start'
    }
    
})