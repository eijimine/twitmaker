// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded', function() {

var button = document.querySelector('#new_tweet');

button.addEventListener('submit',function(e) {
    e.preventDefault();

  $.ajax({
  url: this.getAttribute('action'),
  method: this.getAttribute('method'),
  data: $(this).serialize(),
  dataType: 'json'
}).done(function(data) {
  var ul = document.querySelector('ul.tweets');
  var span = document.createElement('span');
  span.innerHTML = data;
  ul.insertBefore(span, ul.childNodes[0]);
});

});
});
