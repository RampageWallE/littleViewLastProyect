import { Image, Pressable } from "react-native";
import { Text, View } from '@/components/Themed';
import { Entypo } from '@expo/vector-icons';
import { Link } from "expo-router";

import IconButton from "./IconButton";
import { styles } from '../styles/TweetDetail'; 
//Import types from a diferent directory
import { TweetProps } from "@/types";


const mainPublication = ({tweet}: TweetProps) => {
    return (
    //   <Link href={{pathname: `/tweet/${tweet.id}`, params: {example: 'THIS IS AN EXAMPLE'}}} asChild>
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image src={tweet.user.image} style={styles.userImage}/>
                <View style={styles.nickNameContainer}>
                    <Text style={styles.name}>{tweet.user.name}</Text>
                    <Text style={styles.username}>{tweet.user.username} · 2h</Text>
                </View>
                <Entypo style={{marginLeft: 'auto', paddingRight: 5}} name="dots-three-horizontal" size={22} color="gray" />
            </View>
          <View style={styles.mainContainer}>
            {/* COMENTARYY'S INFORMATION USER */}
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
      </View>
    // </Link>
    )
}
export default mainPublication;