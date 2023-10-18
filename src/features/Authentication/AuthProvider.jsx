import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from './firebase.config';
import { useEffect, useState } from "react";

const AuthContext = createContext(null);

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

  const authInfo = {
    user,
    loading,
    signUp
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