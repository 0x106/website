var express = require('express');
var firebase = require('firebase');
var router = express.Router();

var config = {
  apiKey: "AIzaSyAKTRU6mz6xcvF0_txlX2s8wqjG8qbFA6Q",
  authDomain: "personal-website-51278.firebaseapp.com",
  databaseURL: "https://personal-website-51278.firebaseio.com",
  projectId: "personal-website-51278",
  storageBucket: "personal-website-51278.appspot.com",
  messagingSenderId: "919280115900"
}; firebase.initializeApp(config);

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('home');
  res.render('index', { title: 'Jordan Campbell' });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

/* GET create page. */
router.get('/create', function(req, res, next) {
  res.render('create');
});

/* GET blog posts (read) page. */
router.get('/read', function(req, res, next) {

  var path = `/posts/cZYwlweEKNRsGT9l8UuckLOJ47W2/`;

  firebase.database().ref(path).once('value').then(function(snapshot) {
      var posts = snapshot.val();
      res.render('read', {posts: posts});
  });
});

module.exports = router;
