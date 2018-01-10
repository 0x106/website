
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

function breaklines(text) {
  text = text.split("\n")
  var output = "";

  for (var i = 0; i < text.length; i++) {
    var paragraph = "<p>" + text[i] + "</p>";
    output += paragraph;
  }

  return output;
}

function writeNewPost(user, header, subheader, body) {

  body = breaklines(body);

  // A post entry.
  var postData = {
    uid: user.uid,
    header: header,
    subheader: subheader,
    body: body
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + user.uid + '/' + newPostKey] = postData;

  console.log("Entry posted");

  return firebase.database().ref().update(updates);
}

var postSubmitButton = document.getElementById('postsubmitbutton');
postSubmitButton.addEventListener("click", function() {

  var header = document.getElementById("ta-heading-style").value;
  var subheader = document.getElementById("ta-subheading-style").value;
  var body = document.getElementById("ta-content-style").value;

  var user = firebase.auth().currentUser;
  if (user) {
    writeNewPost(user, header, subheader, body);
  } else {
    console.log('no user signed in');
  }
});
