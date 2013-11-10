// Cache selectors
var prevId = "intro";
var menuItems = $('#list a[href]');
var anchors = $("#main a[id]");
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
    var menuItem = menuItems.filter("[href='#"+id+"']").closest('.exercise-item').addClass("exercise-item-selected");
    var menuItemTop = menuItem.offset().top;
    // scroll off screen menu item
    if (menuItemTop > topPos + windowHeight) {
      $('#list').animate({scrollTop : $('#list').scrollTop() + windowHeight/2})
    } else if (menuItemTop < topPos) {
      $('#list').animate({scrollTop : $('#list').scrollTop() - windowHeight/2})
    }
  }              
});
$('.exercise-title').on('click', function(){
  menuItems.closest('.exercise-item').removeClass("exercise-item-selected");
  $(this).closest('.exercise-item').addClass('exercise-item-selected');
});
$('pre').each(function(i,e){
  var codeEl = $(e);
  var height = codeEl.height();
  codeEl.css('height',height + "px");
  ace.config.set('basePath', '/vendor/ace');
  var editor = ace.edit(e);
  editor.setShowPrintMargin(false);
  editor.setTheme("ace/theme/chrome");
  editor.getSession().setMode("ace/mode/javascript"); 
})