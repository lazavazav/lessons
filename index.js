//code to make picture slideshow
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  3000);


//code to make text appear in proPic section on mouseover
	$(document).ready(function() {
		$(".about").mouseenter(function() {
			$(".text").stop(true).fadeIn("1000");
		});
	 

	$(".about").mouseleave(function() {
		$(".text").stop(true).fadeOut("slow");//.stop(true) keeps the fade in/out from looping/flickering
	});
});



