$(document).ready(function() {


  $(".navigation").hide();

  $(".mobile-button").click(function() {
		$(this).toggleClass("active");
		$(".navigation").slideToggle("fast");
	});


  $(".menu a").click(function() {
    $(this).toggleClass("active");
    $(this).next("ul").slideToggle( "fast", function() {
      // Animation complete.
    });
	});


	//ACCORDION
	$(".ac-handle").click(function() {
		$(".ac-handle").removeClass("open");
		$(".ac-drawer").slideUp("normal");

		if($(this).next().is(":hidden") == true) {
			$(this).addClass("open");
			$(this).next().slideDown("normal");
		 }

	 });

   $(".ac-handle").mouseover(function() {
  		$(this).addClass("hover");
    }).mouseout(function() {
    	$(this).removeClass("hover");
    });

	$(".ac-drawer").hide();
  //ACCORDION





});
