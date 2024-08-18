import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseconfig = {
    apiKey: "AIzaSyC0XsFqgbezSeAsrJzJoNtcBktPlK1bO3M",
    authDomain: "fir-react-tutorial-0.firebaseapp.com",
    projectId: "fir-react-tutorial-0",
    storageBucket: "fir-react-tutorial-0.appspot.com",
    messagingSenderId: "254683202216",
    appId: "1:254683202216:web:e5a661d342e58b2ca4f89d"
  };


const app= initializeApp(firebaseconfig);
const db=getFirestore(app);

export default db;