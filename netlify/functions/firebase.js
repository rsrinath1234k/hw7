const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyA6VXUtrvB96BEZmJiyr9IlX-fKLNDZx_Q",
  authDomain: "kiei-451-17cd5.firebaseapp.com",
  projectId: "kiei-451-17cd5",
  storageBucket: "kiei-451-17cd5.appspot.com",
  messagingSenderId: "3344532057",
  appId: "1:3344532057:web:18a419a32ba7313f182748"} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase