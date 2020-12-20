$(document).ready(function(){
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });
    //Slide Initialize
    $('#slider').carousel({
        interval: 4000,
        pause: false
    })
    //Testimonial Initialize
    $('#testimonial-carousel').carousel();
    if (Modernizr.mq('(max-width: 767px)')) {
        $('#testimonial-item').removeClass('col-lg-6');
        $('#testimonial-item').addClass('col-lg-12');
    } else {
        $('#testimonial-item').removeClass('col-lg-12');
        $('#testimonial-item').addClass('col-lg-6');
    }
    //Gallery Initialize
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter'); 
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
        $(this).addClass("active");
})