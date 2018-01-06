var basicTimelineNames = anime.timeline();
// var basicTimelineMenu = anime.timeline();

basicTimelineNames.add(
  {
    targets: ['div.name#first', ''],
    translateX: [
      {value: '-40%', duration: 1000},
      {value: '0%', duration: 3000}
    ],
    offset: 450
  }
).add({
  targets: ['div.name#last', ''],
  translateX: [
    {value: '-40%', duration: 2000},
    {value: '0%', duration: 4000}
  ],
  offset: '-=4000'
}).add({
  targets: 'div.element',
  opacity: [{value: 0.0, duration: 8500}, {value: 0.5, duration: 1000}, {value: 1.0, duration: 500}],
  // elasticity: 0,
  offset: '-=10000'
});


$('#code').on('mouseover', function () {
  anime({
    targets: 'div.code-text',
    opacity: [{value: 1.0, duration: 1000}, {value: 0.5, duration: 1000}, {value: 0.0, duration: 1000}],
  });
});

$('#ml').on('mouseover', function () {
  anime({
    targets: 'div.ml-text',
    opacity: [{value: 1.0, duration: 1000}, {value: 0.5, duration: 1000}, {value: 0.0, duration: 1000}],
  });
});

$('#math').on('mouseover', function () {
  anime({
    targets: 'div.math-text',
    opacity: [{value: 1.0, duration: 1000}, {value: 0.5, duration: 1000}, {value: 0.0, duration: 1000}],
  });
});

$('#write').on('mouseover', function () {
  anime({
    targets: 'div.write-text',
    opacity: [{value: 1.0, duration: 1000}, {value: 0.5, duration: 1000}, {value: 0.0, duration: 1000}],
  });
});

$('#cc').on('mouseover', function () {
  anime({
    targets: 'div.cc-text',
    opacity: [{value: 1.0, duration: 1000}, {value: 0.5, duration: 1000}, {value: 0.0, duration: 1000}],
  });
});


var codeButton = document.getElementById('write');
codeButton.addEventListener("click", function() {
  console.log("code clicked");
  document.getElementById("contenttext").addClass("show");
});
