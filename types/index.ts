export type UserType = {
    id: string;
    name: string;
    username : string;
    image?: string;
  }
export type TweetType = {
    id: string;
    user : UserType;
    createdAt : string;
    content : string; 
    image?: string; 
    numberOfComments?: number; 
    numberOfRetweets?: number; 
    numberOfLikes?: number;
    impressions?: number;
  }

export type TweetProps = {
  tweet : TweetType;
}