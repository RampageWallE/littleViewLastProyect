import tweets from "@/assets/data/tweets";
import { View, Text } from "@/components/Themed";
import Tweet from "@/components/Tweet";
import { TweetType } from "@/types";
import Mainpublication from "../../components/mainPublication";
import { useGlobalSearchParams } from 'expo-router';
export default function TweetScreen (){
    
    //We are using { } above the id to desestructure objects in this case from userGlobalSearchParams.
    const { id, example } =  useGlobalSearchParams();

    // console.warn(example);

    const tweet = tweets.find(t => t.id === id);
    const tweet2 = tweets.find(t => t.id === '111111111' );

    if(!tweet || !tweet2) {
        return <Text>Tweet {id} not found!</Text>
    }
    return (
    <View>
        <Mainpublication tweet={tweet}/>
        <View>
            <Tweet tweet={tweet2}/>
        </View>
    </View>);
}