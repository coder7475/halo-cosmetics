import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from './firebase.config';
import { useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      // console.log("user in the auth state changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    setUser(null);
    setLoading(true);
    return signOut(auth);
  }

  const authInfo = {
    user,
    loading,
    signUp,
    signin,
    signout
  }
  
  return (
    <div>
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>     
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};


export default AuthProvider;