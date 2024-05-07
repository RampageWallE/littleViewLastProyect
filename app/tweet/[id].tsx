import tweets from "@/assets/data/tweets";
import Tweet from "@/components/Tweet";
import { TweetType } from "@/types";
import { useGlobalSearchParams } from 'expo-router';
import { Text } from "react-native";
export default function TweetScreen (){
    
    //We are using { } above the id to desestructure objects in this case from userGlobalSearchParams.
    const { id } =  useGlobalSearchParams();

    const tweet = tweets.find(t => t.id === id);

    if(!tweet) {
        return <Text>Tweet {id} not found!</Text>
    }

    return <Tweet tweet={tweet} />;
}