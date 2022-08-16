import fetch from 'node-fetch';
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDqG4DEYjEu_W_pGk_o844Jdav4hEiMOPY",
    authDomain: "cloudstoretest-7f7de.firebaseapp.com",
    projectId: "cloudstoretest-7f7de",
    storageBucket: "cloudstoretest-7f7de.appspot.com",
    messagingSenderId: "350697386944",
    appId: "1:350697386944:web:961be4618956e1055cce25",
    measurementId: "G-G88NRDSKME"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage();
console.log("STORAGE:", storage);
getDownloadURL(ref(storage, 'cstore.txt'))
  .then(async (url) => {
    // `url` is the download URL for 'images/stars.jpg'
    console.log(url);

    fetch(url)
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
      })
      .catch(error=>{
        console.log(error);
      })

  })
  .catch((error) => {
    // Handle any errors
    console.log(error);
  });
