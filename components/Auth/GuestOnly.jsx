import { useRouter } from "expo-router";
import { useEffect } from "react";

import { useUser } from "../../hooks/useUser";

import ThemedLoader from "../ThemedLoader";

const GuestOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Redirect authenticated users to /replace
    if (authChecked && user !== null) {
      router.replace("/replace");
    }
  }, [user, authChecked]);

  if (!authChecked) {
    return 
    <ThemedLoader/>
  }

  if (user === null) {
    // Guest users are allowed
    return children;
  }

  return null;
};

export default GuestOnly;
