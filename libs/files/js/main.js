$(function(){
	 var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
 });

/*открытия сайдбара */
$(function(){
  $('.toggle-btn').on('click', function () {
      $('.sidebar').toggleClass('active');
      $("body").toggleClass('no-scroll');
    	$("body").toggleClass('no-scroll');
  });
});

$(function(){
  $('.toggle-btn').on('click', function () {
      $('.admin-sidebar').toggleClass('active');
      $('.admin-page-content').toggleClass('active');
      $("body").toggleClass('no-scroll');
  });
});

$(function(){
	var all = $('.edit-page-nav li a');
	$('.edit-page-nav li a').on('click', function(){
		$(all).removeClass('cubic');
		$(this).toggleClass('cubic');
	});

});


