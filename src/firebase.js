import * as firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyDNABR1YD9ETMWiombWATjnT_QCvINi2qU",
    authDomain: "careserv-crud.firebaseapp.com",
    databaseURL: "https://careserv-crud.firebaseio.com",
    projectId: "careserv-crud",
    storageBucket: "careserv-crud.appspot.com",
    messagingSenderId: "823303838887",
    appId: "1:823303838887:web:618d92974239185a21cf82"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();