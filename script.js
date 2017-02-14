var buttonElement = document.getElementById('my-first-button')
var buttonElement2 = document.getElementById('my-second-button')
var buttonElement3 = document.getElementById('my-third-button')
var audioElement = document.getElementById('audio')
var audioElement2 = document.getElementById('audio2')
var audioElement3 = document.getElementById('audio3')

buttonElement.addEventListener('click', function () {
  audioElement.play();
})
buttonElement2.addEventListener('click', function () {
  audioElement2.play();
})
buttonElement3.addEventListener('click', function () {
  audioElement3.play();
})
buttonElement.addEventListener('mouseenter', function () {
  audioElement.play();
})
buttonElement2.addEventListener('mouseenter', function () {
  audioElement2.play();
})
buttonElement3.addEventListener('mouseenter', function () {
  audioElement3.play();
})
