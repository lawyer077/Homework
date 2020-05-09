$(document).ready(function(){
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
        nextArrow: '<img src="image/Layer%2010.png" alt="">',
        prevArrow: '<img src="image/Layer%2010%20copy.png" alt="">',
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});