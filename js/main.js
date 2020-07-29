$(document).ready(function(){
  // якорь
  $(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});
  // бургер

  $('.burger-btn, .burger__link').click(function(event) {
    $('.burger, .burger-btn, burger-btn span').toggleClass('active');
  });

    $('.works-box'  ).slick({
        infinite: true,
        slidesToScroll: 2,
        slidesToShow: 3,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrows: false
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            
          ]
    }); 

    // Фильтр
    let filter = $("[data-filter]");
    
    filter.on('click', function() {
      $('.works-box').slick('slickUnfilter');
        let category = $(this).data('filter');

        if (category == 'all') {
            $('[data-category]').css('display', '');
        } else {
            $('[data-category]').each(function() {

                let categoryOn = $(this).data('category');
                if (categoryOn != category) {
                    $(this).css('display', 'none');
                } else {
                    $(this).css('display', '');
                }
                
            });
        }
        

        
    });

    //  кнопки для фильтра
    let workBtn = $('.works__navigation_btn').on('click', function() {
        workBtn.removeClass('active-btn');
        $(this).addClass('active-btn');
    });
    // прогресс бар
    let progressBar = function() {
      let $this = $(this);
      let per = $this.attr('per');
      $this.css("width",per+'%');
    };
    $('.about-skill__item_bar').each(progressBar);
});