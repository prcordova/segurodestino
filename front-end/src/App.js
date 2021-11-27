import { useContext, useEffect, useState } from 'react';
import useAuth from './hooks.js/useAuth';
import { firebase, auth } from './services/firebase'

export default function App() {
  const { user, setUser } = useAuth();


  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const { uid, displayName, photoURL } = user;
        if (!displayName || !photoURL) throw new Error("Usuário sem nome de identificação ou foto");

        setUser({
          id: uid,
          avatar: photoURL,
          name: displayName,
        })

      }
    })
  }, []);


  const handleClickButtonLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { uid, displayName, photoURL } = result.user;
      if (!displayName || !photoURL) throw new Error("Usuário sem nome de identificação ou foto");

      setUser({
        id: uid,
        avatar: photoURL,
        name: displayName,

      })
    }

  }
  return (
    <div>
      <div>
        <h1>teste</h1>
      </div>
      <div>
        <button onClick={handleClickButtonLogin}>Login</button>
      </div>
    </div>
  );
};


