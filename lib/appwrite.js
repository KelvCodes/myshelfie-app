import { Account, Avatars, Client, Databases } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("68484f3600032736ce6a") // Replace with your project ID
  .setPlatform('dev.kelvcodes.shelfie');


export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);


