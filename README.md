# My personal website.

Heavily inspired by articles on [codrops](https://tympanus.net/codrops/), most notably
those by [Mary Lou](https://tympanus.net/codrops/author/crnacura/). All the code is
my own. I use [anime.js](http://animejs.com/) for the animations.

This website could have been built entirely client side, using only HTML + CSS and
client-side javascript, however I embedded it in a Node.js + Express application, as
I plan on adding different functionality later on.

I'm going to add a facial recognition login system, for instance, as a fun side project.

At the moment the site is deployed to Heroku, however all the backend functionality
(e.g. the database and authentication) is provided by Firebase.

#### TODO:

- [x] show / hide content.
- [ ] add links
- [x] add sign in
- [ ] database of links (caught from chrome extension)
- [x] editor interface.


### Blog Creator

I built a simple text editor in a 'hidden' page, accessible by clicking the 'r' in my name. This editor
allows me to create blog posts from the browser.
