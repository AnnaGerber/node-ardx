// Cache selectors
var prevId = "intro";
var menuItems = $('#list a[href]');
var anchors = $("a[id]");
$(window).scroll(function(){
  var topPos = $(this).scrollTop();
  var windowHeight = $(window).height();    
  var first = false;
  anchors.each( function() {
    var offset = $(this).offset();
    if (topPos <= offset.top && ($(this).height() + offset.top) < (topPos + windowHeight) && !first) {
      first=this;
    } 
  });
  var id = $(first).attr('id');
  if (first && prevId != id) {
    prevId = id;
    menuItems.closest('.exercise-item').removeClass("exercise-item-selected");
    menuItems.filter("[href='#"+id+"']").closest('.exercise-item').addClass("exercise-item-selected");
  }              
});
$('.exercise-title').on('click', function(){
  menuItems.closest('.exercise-item').removeClass("exercise-item-selected");
  $(this).closest('.exercise-item').addClass('exercise-item-selected');
});