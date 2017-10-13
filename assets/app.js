 $(document).ready(function() {
     $('.slider').slider();
     $('select').material_select();
     $('.materialboxed').materialbox();

     var $message = $('.full');
     $message.addClass('fadeIn fast');
     $(".home").addClass('fadeOut')

     setTimeout(function() {
         $message.removeClass('fadeIn').addClass('fadeOut');
         $(".home").removeClass("fadeOut").addClass("fadeIn fast");
         $(".load").addClass("hide");
     }, 3000);

 });