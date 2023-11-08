import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
export const Authcontextprovider = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const provider = new GoogleAuthProvider();

const Authcontext = ({ children }) => {
  const [user, setUser] = useState("");
  const [isLoading, setLoading] = useState(true);
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
      setLoading(false);
    });
  }, []);

  const userLogout = () => {
    setLoading(true);

    return signOut(auth);
  };

  const Authinfo = {
    userRegister,
    userLogin,
    userGoogle,
    userLogout,
    user,
    isLoading,
  };
  return (
    <Authcontextprovider.Provider value={Authinfo}>
      {children}
    </Authcontextprovider.Provider>
  );
};

Authcontext.propTypes = {
  children: PropTypes.object,
};

export default Authcontext;

