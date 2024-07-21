import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/clientApp";
function useAuth() {
  const [user, setUser] = useState<any | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
      } else {
        console.log("There is no user");
      }
    });

    return () => unsubscribe();
  }, []);
  return user;
}

export default useAuth;
