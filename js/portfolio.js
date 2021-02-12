$(document).ready(function(){
    topChk();
  });

  function topChk(){
    jQuery('.scroll-animation-ready').not('.active').each(function(){
            $(this).addClass("active");
    });
}

function scrollChk(){
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();

    jQuery('.scroll-animation').not('.active').each(function(){
        var pos = $(this).offset().top;

        if (scroll > pos - windowHeight){
            $(this).addClass("active");
        }
    });
}
