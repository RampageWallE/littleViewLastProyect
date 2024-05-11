import { Animated, Button, FlatList, Pressable, RefreshControl, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';
import { Entypo } from '@expo/vector-icons';
import { Link, router } from 'expo-router';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
        <Button title='cerrar sesion' onPress={() => router.replace('/login')}/>
      <FlatList 
        data={tweets} 
        // ItemSeparatorComponent={() => <Text>THIS IS A SPACE BETWEEN EACH ITEM</Text>}
        renderItem={({item})=> <Tweet tweet={item}/>}/>
      <Link href="/new-tweet" asChild>
        <Entypo name='plus' size={24} color="white" style={styles.floatingButton}/>
      </Link>
    </View>
  )
}

const styles =  StyleSheet.create({
  container:{
    flex: 1,
    // backgroundColor: 'white',
  },
  floatingButton:{
    backgroundColor: '#1C9BF0',
    width: 50,
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    lineHeight: 50,
    position: 'absolute',
    right: 22,
    bottom: 22,
    overflow: 'visible',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  }
}) 
