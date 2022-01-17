$(document).ready(function() {
    $('#mycarousel').carousel({ interval : 2000 });
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }    
    });
})

$(document).ready(function() {
    // Login click event toggles the login modal.
    $('#loginLink').click(function() {
        $('#loginModal').modal('toggle');
    });

    // Reserve table button click toggles the table reservation modal.
    $('#reserveButton').click(function() {
        $('#reserveModal').modal('toggle');
    });
})