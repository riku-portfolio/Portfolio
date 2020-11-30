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
$(window).scroll(function (){
    scrollChk();
});
$('body').on('touchmove', function() {
    scrollChk();
});

function changeColor() {
    var scrollY = window.pageYOffset;
        
    var tr1 = document.getElementById('tr1');
    var tr2 = document.getElementById('tr2');
    var tr3 = document.getElementById('tr3');
    var tr4 = document.getElementById('tr4');
    var tr5 = document.getElementById('tr5');
    var tr6 = document.getElementById('tr6');
    var tr7 = document.getElementById('tr7');
    var tr8 = document.getElementById('tr8');
    var tr9 = document.getElementById('tr9');
    var tr10 = document.getElementById('tr10');
    var tr11 = document.getElementById('tr11');
    var tr12 = document.getElementById('tr12');
    var tr13 = document.getElementById('tr13');
    var tr14 = document.getElementById('tr14');

    var tr1Y = tr1.getBoundingClientRect().top; // ウィンドウ上からの要素の位置
    var tr2Y = tr2.getBoundingClientRect().top;
    var tr3Y = tr3.getBoundingClientRect().top;
    var tr4Y = tr4.getBoundingClientRect().top;
    var tr5Y = tr5.getBoundingClientRect().top;
    var tr6Y = tr6.getBoundingClientRect().top;
    var tr7Y = tr7.getBoundingClientRect().top;
    var tr8Y = tr8.getBoundingClientRect().top;
    var tr9Y = tr9.getBoundingClientRect().top;
    var tr10Y = tr10.getBoundingClientRect().top;
    var tr11Y = tr11.getBoundingClientRect().top;
    var tr12Y = tr12.getBoundingClientRect().top;
    var tr13Y = tr13.getBoundingClientRect().top;
    var tr14Y = tr14.getBoundingClientRect().top;


    const windowHeight = window.innerHeight; // 現在のブラウザの高さ

    /*
    red{ #e74c3c;}
    blue{ #3498db;}
    orange{ #e67e22;}
    green{ #2ecc71;}
    yellow{ #f1c40f;}
    
    */
   
        if(scrollY >= (tr1Y + scrollY) - windowHeight + 500) {
            tr1.style.borderColor = '#e74c3c';
        }if(scrollY >= (tr2Y + scrollY) - windowHeight + 500) {
            tr2.style.borderColor = '#3498db';
        }if(scrollY >= (tr3Y + scrollY) - windowHeight + 500) {
            tr3.style.borderColor = '#e67e22';
        }if(scrollY >= (tr4Y + scrollY) - windowHeight + 500) {
            tr4.style.borderColor = '#2ecc71';
        }if(scrollY >= (tr5Y + scrollY) - windowHeight + 500) {
            tr5.style.borderColor = '#f1c40f';
        }if(scrollY >= (tr6Y + scrollY) - windowHeight + 500) {
            tr6.style.borderColor = '#e74c3c';
        }if(scrollY >= (tr7Y + scrollY) - windowHeight + 500) {
            tr7.style.borderColor = '#3498db';
        }if(scrollY >= (tr8Y + scrollY) - windowHeight + 500) {
            tr8.style.borderColor = '#e67e22';
        }if(scrollY >= (tr9Y + scrollY) - windowHeight + 500) {
            tr9.style.borderColor = '#2ecc71';
        }if(scrollY >= (tr10Y + scrollY) - windowHeight + 500) {
            tr10.style.borderColor = '#f1c40f';
        }if(scrollY >= (tr11Y + scrollY) - windowHeight + 500) {
            tr11.style.borderColor = '#e74c3c';
        }if(scrollY >= (tr12Y + scrollY) - windowHeight + 500) {
            tr12.style.borderColor = '#3498db';
        }if(scrollY >= (tr13Y + scrollY) - windowHeight + 500) {
            tr13.style.borderColor = '#e67e22';
        }if(scrollY >= (tr14Y + scrollY) - windowHeight + 500) {
            tr14.style.borderColor = '#2ecc71';
        }
        else {
            ;
        }
      }
      
      window.addEventListener('scroll', changeColor);
