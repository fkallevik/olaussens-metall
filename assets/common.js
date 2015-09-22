var Olaussensmetall;

Olaussensmetall = {
  init: function() {
    $('html').removeClass('no-js');
  },
  initOnLoad: function() {
    Olaussensmetall.dynamicHeader();
  },
  dynamicHeader: function() {
    $(window).scroll(function(e) {
      var endHeight, endWidth, scrolledPixels, startHeight, startWidth;
      scrolledPixels = $('.header').offset().top;
      if (scrolledPixels <= 30) {
        $('.nav-main').css({
          'margin-top': 25 - (scrolledPixels / 12),
          'margin-bottom': 20 - (scrolledPixels / 2)
        });
        $('.header').css({
          'padding-top': 25 - (scrolledPixels / 1.5),
          'padding-bottom': 25 - (scrolledPixels / 1.5)
        });
      } else {
        $('.nav-main').css({
          'margin-top': '20px',
          'margin-bottom': '5px'
        });
        $('.header').css({
          'padding-top': '5px',
          'padding-bottom': '0px'
        });
      }
      if (Modernizr.backgroundsize) {
        startWidth = 350;
        endWidth = 272;
        startHeight = 51;
        endHeight = 40;
        if (scrolledPixels === 0) {
          return $('.logo-main a').css({
            'background-size': startWidth + 'px ' + startHeight + 'px',
            width: startWidth,
            height: startHeight
          });
        } else {
          return $('.logo-main a').css({
            'background-size': endWidth + 'px ' + endHeight + 'px',
            width: endWidth,
            height: endHeight
          });
        }
      }
    });
  }
};

$(document).ready(Olaussensmetall.init);

$(window).load(Olaussensmetall.initOnLoad);
