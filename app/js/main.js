(function(){
  var app = {
      init: function(){
        this.setUpListeners();
      },

      setUpListeners: function(){
        $(window).on('scroll', this.checkSection);
        $('.nav__item_link').on('click', this.navigation);
        $(document).on('mousemove', this.cubeTransform);
        $('.main-select').on('click', this.showCustomSelect);
        $('.field').blur(this.inputEffect);
      },

      checkSection: function(){
        $('.section').each(function(){
          var $this = $(this),        // section
            topEdge = $this.offset().top - 200,  // верхний отступ секшена
            bottomEdge = topEdge + $this.height(),  // нижний отступ секшена
            wScroll = $(window).scrollTop();    // скрол окна

          if(topEdge < wScroll && bottomEdge > wScroll){
            var currentId = $this.data('section'),  // section по data атрибуту
              // выбираем соответствующий секшену линк
              reqLink = $('.nav__item_link').filter('[href="#' + currentId + '"]');

            // console.log(currentId);
            reqLink.closest('.nav__item').addClass('active').siblings().removeClass('active');

            window.location.hash = currentId;
          }
        });
      },

      navigation: function(e) {
        e.preventDefault();

        app.showSection($(this).attr('href'), true);
      },

      showSection: function (section, isAnimate){
        var direction = section.replace(/#/, ''),
          reqSection = $('.section').filter('[data-section="' + direction + '"]'),
          reqSectionPos = reqSection.offset().top;

        console.log(reqSection);
        if(isAnimate) {
          $('body, html').animate({scrollTop: reqSectionPos}, 500);
        } else {
          $('body, html').scrollTop(reqSectionPos);
        }
      },

      cubeTransform: function(e){
        $('#cube').css({
          '-webkit-transform' : 'rotateX('+e.pageY+'deg) rotateY('+e.pageX+'deg)'
        });
      },

      showCustomSelect: function(e) {
        e.preventDefault();

        $('.custom-select__list').toggleClass(' active-select');
      },

      inputEffect: function() {
        var input = $('.field'),
            value = input.val();

        console.log($('.field').val());
        console.log(value.length);
        if (value.length > 0) {
          $('.label-text').css('transform', 'translate3d(0, -145%, 0)');
        }
      }
    };
  app.init();
}());
