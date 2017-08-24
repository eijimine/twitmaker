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
  var p = document.createElement('p');
  var time = document.createElement('time');
  var tweet = document.createElement('li');
  tweet.className = 'tweet';
  var message = data.message;
  var created_at = data.created_at;
  p.append(message);
  time.append(created_at);
  tweet.append(p);
  tweet.append(time);
  ul.insertBefore(tweet, ul.childNodes[0]);
  var submit = document.querySelector('#create-tweet');
  submit.removeAttribute('data-disable-with');
  submit.disabled = false;
  var form = document.querySelector('#tweet_message');
  form.value = '';
});

});
});
