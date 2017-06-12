$(document).ready(function() {

  // Parallax
  $('.parallax-window').parallax({
    imageSrc: './resources/img/bg-foto.jpeg'
  });

  // Dropdown
  $('.dropdown').hover(
    function() {
      $(this).children('.sub-menu').slideDown(200);
    },
    function() {
      $(this).children('.sub-menu').slideUp(200);
  });

  // Lightbox
  $('.lightbox_trigger').click(function(e) {

    //prevent default action (hyperlink)
    e.preventDefault();

    //Get clicked link href
    var image_href = $(this).attr("href");

    if ($('#lightbox').length > 0) { // #lightbox exists

      //place href as img src value
      $('#content').html('<img src="' + image_href + '" />');

      //show lightbox window - you could use .show('fast') for a transition
      $('#lightbox').show();
    } else { //#lightbox does not exist - create and insert (runs 1st time only)

      //create HTML markup for lightbox window
      var lightbox =
        '<div id="lightbox">' +
          '<p>Нажмите чтобы закрыть</p>' +
          '<div id="content">' + //insert clicked link's href into img src
            '<img src="' + image_href + '" />' +
          '</div>' +
        '</div>';

      //insert lightbox HTML into page
      $('body').append(lightbox);
    }

    $('#lightbox').click(function() { //must use live, as the lightbox element is inserted into the DOM
      $('#lightbox').hide();
    });
  });

  // Fixed Menu
  $(window).bind('scroll', function () {
    if ($(this).scrollTop() > 447 && $(window).width() > 767) {
        $('#fixed-menu').addClass('fixed');
        $('.scrolled').css({'margin-top':' 90px'});
    } else {
        $('#fixed-menu').removeClass('fixed');
        $('.scrolled').css({'margin-top':' 0'});
    }
});


});
