import { Image, Pressable } from "react-native";
import { Text, View } from '@/components/Themed';
import { Entypo } from '@expo/vector-icons';
import { Link } from "expo-router";

//Import types from a diferent directory
import { styles } from '../styles/TweetStyle'; 
import IconButton from "./IconButton";
import { TweetProps } from "@/types";


const Tweet = ({tweet}: TweetProps) => {
    return (
      // asChild is used to rendering as a child of the link instead rendering the text
      // You can also send data and desestructure that data 
      // <Link href={`/tweet/${tweet.id}?orden=descendente`} asChild>
      <Link href={`/tweet/${tweet.id}`} asChild>
        {/* Presable is used because View doesnt have press event but this yes  */}
        <Pressable style={styles.container}>
          <Image src={tweet.user.image} style={styles.userImage}/>
          <View style={styles.mainContainer}>
            {/* COMENTARYY'S INFORMATION USER */}
            <View style={{ flexDirection: 'row'}}>
              <Text style={styles.name}>{tweet.user.name}</Text>
              <Text style={styles.username}>{tweet.user.username} · 2h</Text>
              <Entypo style={{marginLeft: 'auto', paddingRight: 5}} name="dots-three-horizontal" size={22} color="gray" />
            </View>
            {/* COMENTARY'S CONTENT */}
            <Text style={styles.content}>{tweet.content}</Text>
            {/* COMENTARY'S IMAGE*/}
            {tweet.image && <Image src={tweet.image} style={styles.image}/>}   
            {/* COMENTARIS BOTTOM BAR  */}
            <View style={styles.footer}>
              <View style={styles.botomElement}><IconButton icon="comment" text={tweet.numberOfComments}/></View>
              <View style={styles.botomElement}><IconButton icon="retweet" text={tweet.numberOfRetweets}/></View>
              <View style={styles.botomElement}><IconButton icon="heart" text={tweet.numberOfRetweets}/></View>
              <View style={styles.botomElement}><IconButton icon="chart" text={tweet.impressions}/></View>
              <View style={styles.botomElement}><IconButton icon="share-apple"text={tweet.impressions}/></View>
            </View>
          </View>
      </Pressable>
    </Link>
    )
}


export default Tweet