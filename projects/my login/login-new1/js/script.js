 //start loading screen
$(window).load(function()
{
	$("body").css("overflow","auto");
	$(".loading-overlay .spinner").fadeOut(2000,
	function()
	{
		$(this).parent().fadeOut(2000,
		function(){
			$(this).remove();
		});
		
	});
});
//end loading screen