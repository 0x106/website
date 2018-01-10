// Initialize Firebase
var config = {
  apiKey: "AIzaSyAKTRU6mz6xcvF0_txlX2s8wqjG8qbFA6Q",
  authDomain: "personal-website-51278.firebaseapp.com",
  databaseURL: "https://personal-website-51278.firebaseio.com",
  projectId: "personal-website-51278",
  storageBucket: "personal-website-51278.appspot.com",
  messagingSenderId: "919280115900"
};
firebase.initializeApp(config);

var loginSubmitButton = document.getElementById('loginsubmitbutton');
loginSubmitButton.addEventListener("click", function() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function() {
    return firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
      console.log(user);
    });
  });
});

var signupSubmitButton = document.getElementById('signupsubmitbutton');
signupSubmitButton.addEventListener("click", function() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function() {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
      console.log(user);
    });
  });
});
