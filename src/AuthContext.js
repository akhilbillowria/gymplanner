// src/contexts/AuthContext.js

import React, { useContext, useState, useEffect } from 'react';
import { auth } from './firebase';

const AuthContext = React.createContext();

// Custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up function
  function signup(email, password, username) {
    return auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
      // Update the user's profile with the username
      return userCredential.user.updateProfile({
        displayName: username,
      });
    });
  }

  // Login function
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // Logout function
  function logout() {
    return auth.signOut();
  }

  // Set up auth state listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Clean up subscription on unmount
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
