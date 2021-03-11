import firebase from 'firebase';
require('@firebase/firestore')
  var firebaseConfig = {
    apiKey: "AIzaSyA8Qp_pcxEG_xjcHReZLW4BseOApT3YbKQ",
    authDomain: "barter-system-c3389.firebaseapp.com",
    databaseURL: "https://barter-system-c3389.firebaseio.com",
    projectId: "barter-system-c3389",
    storageBucket: "barter-system-c3389.appspot.com",
    messagingSenderId: "52251418415",
    appId: "1:52251418415:web:daf39ec2bccc668d280bda"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
