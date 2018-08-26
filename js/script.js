var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 15,
    freeMode: true,
});

$(document).ready(function(){ 
    $('.btn-seconds').click(function() { 
        $('.btn-seconds').removeClass('btn-seconds-active');
        $(this).addClass('btn-seconds-active');
    });
});

$(document).ready(function(){ 
    $('.btn-set').click(function() { 
        $('.btn-set').removeClass('btn-set-active');
        $(this).addClass('btn-set-active');
    });
});

