import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBYf5P1uAhlp8O6UGgzJOZtzvQQ5YNfx58",
    authDomain: "resturantapp-6f183.firebaseapp.com",
    databaseURL: "https://resturantapp-6f183-default-rtdb.firebaseio.com",
    projectId: "resturantapp-6f183",
    storageBucket: "resturantapp-6f183.appspot.com",
    messagingSenderId: "637605959248",
    appId: "1:637605959248:web:85fb3c589a83181daa2355"
  };

  const app = getApps.length>0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};