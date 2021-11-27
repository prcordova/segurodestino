import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyAptdbR1A2sIIoZyv6_hLmcrYX7VKtinME",
  authDomain: "fir-react-auth-44ef7.firebaseapp.com",
  projectId: "fir-react-auth-44ef7",
  storageBucket: "fir-react-auth-44ef7.appspot.com",
  messagingSenderId: "1078469204311",
  appId: "1:1078469204311:web:7e3170c8ec20aa19d3c612",
  measurementId: "G-1SQDBDTZVZ"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { firebase, auth, app };