/*global $:false */

var adjustDocLayout = function () {
  imagesLoaded('.doc-article', function () {
    var windowWidth = $(window).width();
    if (windowWidth > 780) {
      var contentsHeight = $('.doc-contents').height();
      var articleHeight = $('.doc-article').height();
      if (contentsHeight > articleHeight) {
        $('.doc-article').height(contentsHeight - 20);
      } else {
        $('.doc-contents').height(articleHeight + 20);
      }
    } else {
      $('.doc-contents').css({'height': '100%'});
      $('.doc-article').css({'height': '100%'});
    }
  });
};

$(document).ready(function () {
  adjustDocLayout();

  $('.navbar-toggle').on('click', function (e) {
    if ($('.navbar-collapse').hasClass('in')) {
      $('.hero').removeClass('menuHide');
    } else if (!$('.navbar-collapse').hasClass('collapsing')) {
      $('.hero').addClass('menuHide');
    }
  });
});

$(window).resize(function() {
  adjustDocLayout();
});
