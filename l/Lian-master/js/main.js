$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop:true,
      nav:true,
      items:1,
  });
});

$(function(){
  $('.toggles button').click(function(){
    var get_id = this.id;
    var get_current = $('.posts .' + get_id);
    $('.block').not(get_current).hide(500);
    get_current.show(500);
  });
  $('#all').click(function(){
    $('.block').show(500);
  });
  $(" button").click(function(e) {
    e.preventDefault();
    $(".btn").removeClass(' active');
    $(this).addClass(' active');
  });
  
  $('input[type="range"]').on('input', function() {

    var control = $(this),
      controlMin = control.attr('min'),
      controlMax = control.attr('max'),
      controlVal = control.val(),
      controlThumbWidth = control.data('thumbwidth');
  
    var range = controlMax - controlMin;
    
    var position = ((controlVal - controlMin) / range) * 100;
    var positionOffset = Math.round(controlThumbWidth * position / 100) - (controlThumbWidth / 2);
    var output = control.next('output');
    
    output
      .css('left', 'calc(' + position + '% - ' + positionOffset + 'px)')
      .text(controlVal);
  
  });
});

