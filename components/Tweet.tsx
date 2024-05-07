import { Button, Image, StyleSheet } from "react-native";
import { Text, View } from '@/components/Themed';
import { Entypo, EvilIcons } from '@expo/vector-icons';

//Import types from a diferent directory
import { TweetType } from "@/types";
import { Icon } from "@expo/vector-icons/build/createIconSet";
import { styles } from '../styles/TweetStyle'; 

// IMPORTING TWEETS
type TweetProps ={
  tweet : TweetType;
}

type IconButtonProps={
  icon: React.ComponentProps<typeof EvilIcons>['name'];
  text?: string | number;
}

const IconButton = ({icon, text}:IconButtonProps) =>{
  return(
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <EvilIcons name={icon} size={22} color="gray"/>
      {text ? <Text style={{fontSize: 12, color: 'gray'}}>{text}</Text> : <Text style={{fontSize: 12, color: 'gray'}}>0</Text> }
      {/* <Text style={{fontSize: 12, color: 'gray'}}>{text}</Text> */}
    </View>
  )
}

const Tweet = ({tweet}: TweetProps) => {
  console.log(tweet.user.image?.toLocaleLowerCase())
    return (
        <View style={styles.container}>
        <Image src={tweet.user.image} style={styles.userImage}/>
        <View style={styles.mainContainer}>
          {/* COMENTARYY'S INFORMATION USER */}
          <View style={{ flexDirection: 'row'}}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.username}>{tweet.user.username} · 2h</Text>
            <Entypo style={{marginLeft: 'auto', paddingRight: 5}} name="dots-three-horizontal" size={22} color="gray" />
          </View>
        {/* COMENTARI'S CONTENT */}
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
    )
}


export default Tweet