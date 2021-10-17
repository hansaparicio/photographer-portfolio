import {initializeApp} from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDK3AGwGVpoX6ZA6jq5VzTlfsv9w8O1tXs",
  authDomain: "photo-protfolio.firebaseapp.com",
  projectId: "photo-protfolio",
  storageBucket: "photo-protfolio.appspot.com",
  messagingSenderId: "750105837823",
  appId: "1:750105837823:web:b690790eda48d2c5100cca"
};

const firebaseApp = initializeApp.initializeApp(config);
// export const storage = getStorage(firebaseApp);
export const storage = firebaseApp.storage;
