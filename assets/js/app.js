var $ = require('jquery');

$(document).ready(function(){
    var audio     = document.getElementById('audio');
    var userAgent = window.navigator.userAgent;
    var isIOS     = userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);

    if (!isIOS) {
        $('.audio-control').hide();
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