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
  console.log(data);
  var ul = document.querySelector('ul.tweets');
  var span = document.createElement('span');
  var message = data.message;
  var created_at = data.created_at;
  span.append(message);
  span.append(created_at);
  ul.insertBefore(span, ul.childNodes[0]);
});

});
});
