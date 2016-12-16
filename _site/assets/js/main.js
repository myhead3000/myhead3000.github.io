$(document).ready(function(){
    var userAgent = window.navigator.userAgent;
    var isIOS9    = function() {
      var deviceAgent = navigator.userAgent.toLowerCase();
      return /(iphone|ipod|ipad).* os 9_/.test(deviceAgent);
    }

    if (isIOS9()) {
        $('#video').remove();
    }

    var $nav       = $('#nav');
    var $navToggle = $('.js-toggle-nav');

    $navToggle.on('click', function(e){
        e.preventDefault();
        $navToggle.find('.hamburger').toggleClass('is-active');
        $nav.toggleClass('is-visible');
    })
});
