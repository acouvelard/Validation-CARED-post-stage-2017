$(document).ready(function() {

  $('.preparation').addClass('display-none');

  $('.recette a').on('click', function() {
    if ($('.preparation').hasClass('display-none')) {
      $('.preparation').removeClass('display-none');
    } else {
      $('.preparation').addClass('display-none');
    }
  });


});
