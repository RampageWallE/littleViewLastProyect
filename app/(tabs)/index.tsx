import { FlatList, StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList data={tweets} renderItem={({item})=> <Tweet tweet={item}/>}/>
    </View>
  )
}

const styles =  StyleSheet.create({
  container:{
    flex: 1,
    // backgroundColor: 'white',
  }
}) 
