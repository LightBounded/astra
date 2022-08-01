import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isChanging, setIsChanging] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsChanging(false);
    });
    return unsub;
  }, []);

  return { user, isChanging };
};

export default useAuth;
