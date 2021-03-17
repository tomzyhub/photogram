import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0RFAbi9WQ0fsYjMVALBZeZRz-GWRAgT4",
  authDomain: "photo-gallery-947fc.firebaseapp.com",
  databaseURL: "https://photo-gallery-947fc.firebaseio.com",
  projectId: "photo-gallery-947fc",
  storageBucket: "photo-gallery-947fc.appspot.com",
  messagingSenderId: "556344038530",
  appId: "1:556344038530:web:5adc917551aabb5e95109b",
};

firebase.initializeApp(firebaseConfig);

const ProjectStorage = firebase.storage();
const ProjectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { ProjectFirestore, ProjectStorage, timeStamp };
