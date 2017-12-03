jQuery(document).ready(function($) {


//Find/save your host name to exclude class being added to a href
$('a[href^="http"]').filter(function() {
  return this.hostname && this.hostname !== location.hostname;
})
//Add class "external" to all other a href (eg external website links)
  .addClass("external")

var sitesClasses = [
  {
  hostname: 'drupal.org', 
  class: 'drupal', 
  message: 'This will take you to the Drupal.org website'
  },
  {
  hostname: 'stackoverflow.com', 
  class: 'stackoverflow',
  message: 'This will take you to the stackoverflow website'
  },
  {
  hostname: 'github.com', 
  class: 'github', 
  message: 'This will take you to the github website'
  }
]

//Remove then add a different class to particular URLs    

$.each(sitesClasses, function(index) {
  $('[href*="' + sitesClasses[index]['hostname'] + '"]').removeClass('external').addClass(sitesClasses[index]['class']);
  $('a.' + sitesClasses[index]['class'] + '').attr('title', sitesClasses[index]['message']);
});


$("a.external").attr('title', 'This will take you to an external website.');

});
