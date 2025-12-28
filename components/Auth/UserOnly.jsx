import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";
import { useUser } from "../../hooks/useUser";
import ThemedLoader from "../ThemedLoader";





const UserOnly = ({ children }) => {
    const {user, authChecked} = useUser()
    const router = useRouter()

    useEffect(() => {
        if(authChecked && user === null){
            router.replace('/login')
        }

    }, [user, authChecked])

    if (!authChecked ){
        return(
         <Text> Loading...</Text>
        )
      
    }
   if (!user){
        return(
         <ThemedLoader/>
        )
      
    }

    return children
}

export default UserOnly