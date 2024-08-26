document.addEventListener("DOMContentLoaded", () => {
 
    const swiper = new Swiper('.article-section__news-swiper--js', {
        loop: false,
        spaceBetween: 16,
        slidesPerView: "auto",
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            // when window width is >= 320px
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 80,
            },
        }
      });


    Fancybox.bind('[data-fancybox]', {

    });  


    // главный экран слайдер

    $('.modal__tab-container--js').each(function() {
        let ths = $(this);
        ths.find('.modal__tabs--js .modal__tab-item').not(':first').hide();
        ths.find('.tab--js .tab__button').click(function() {
            ths.find('.tab--js .tab__button').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.modal__tabs--js .modal__tab-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });

    


    if ($(window).width() < 768) {
        $('.hero-section__item-container--js .hero-section__item--js').not(':first').hide();
        $('.modal__mobile-links--js').find('.modal__mobile-link').click(function() {
            $('.modal__mobile-links--js .modal__mobile-link').removeClass('active').eq($(this).index()).addClass('active');
            $('.hero-section__item-container--js .hero-section__item--js').hide().eq($(this).index()).fadeIn()
            Fancybox.close(true);
        }).eq(0).addClass('active');
        console.log(Fancybox)
        
    } else {
        $('.hero-section__list--js').each(function() {
            let ths = $(this);
            ths.find('.hero-section__item-container--js .hero-section__item--js').not(':first').hide();
            ths.find('.hero-section__bullets--js .hero-section__bullets-link').click(function() {
                ths.find('.hero-section__bullets--js .hero-section__bullets-link').removeClass('active').eq($(this).index()).addClass('active');
                ths.find('.hero-section__item-container--js .hero-section__item--js').hide().eq($(this).index()).fadeIn()
            }).eq(0).addClass('active');
        });
    }  


    // спонсор аватар
    let sponsor = $('.sponsor--js')

    sponsor.click(function() {
        let that = $(this)
        sponsor.removeClass('active')
        that.addClass('active')
    })

    

    // переключение галереи в статье
    let gallery = $('.article-section__gallery--js')
    let mainImage = gallery.find('.article-section__gallery-image--js img')
    let thumbsWrapImage = gallery.find('.article-section__thumb--js')


    thumbsWrapImage.click(function(){
        thumbsWrapImage.removeClass('active')
        $(this).addClass('active')
        
        mainImage.attr('src', $(this).find('img').attr('src'))
    })




    // включение выключчение кнопки в пожертвованиии
    $('.radio input[type="checkbox"]').click(function() {
        if ($(this).is(':checked')) {
            $(this).closest('.donation-block__form-button').find('.button').removeAttr('disabled')
        } else {
            $(this).closest('.donation-block__form-button').find('.button').attr('disabled', 'disabled');
        }
    });


    // скролл к секции на мобильном
    $('.hero-section__nav-mobile select').on('change', function(){
        
        let that = $(this)
        window.location.hash = "#" + that.val()
    })

})