var $ = require('jquery');

$(document).ready(function(){
    var audio     = document.getElementById('audio');
    var userAgent = window.navigator.userAgent;
    var isIOS     = userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
    var isIOS9    = function() {
      var deviceAgent = navigator.userAgent.toLowerCase();
      return /(iphone|ipod|ipad).* os 9_/.test(deviceAgent);
    }

    if (!isIOS) {
        $('.audio-control').hide();
    }

    if (isIOS9()) {
        $('#video').remove();
    }

    $('.audio-control').on('click', function(e){
        e.preventDefault();
        var $this = $(this);

        $this.toggleClass('is-playing');

        if ($this.hasClass('is-playing')) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});