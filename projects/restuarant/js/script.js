
  $(document).ready(function(){
	  //sidenav activation
    $('.sidenav').sidenav();

      //slider activation
	$('.slider').slider({fullWidth: true});
		
	//our work section
	$("#btn-all").click(function(){
		$(".items .item").slideDown();
	});
	
	$("#btn-web").click(function(){
		$(".items .item").fadeOut();
		$(".items .web").fadeIn();
	});
	
	$("#btn-mobile").click(function(){
		$(".items .item").hide("slow");
		$(".items .mobile").show("slow");
	});
	
	$("#btn-desk").click(function(){
		$(".items .item").slideUp();
		$(".items .desk").slideDown();
	});
		
	//materialboxed activation
	//$('.materialboxed').materialbox();
	
	//parallax activation
	$('.parallax').parallax();
	
	//smooth scroll
	
	$('a').click(function(){
		$('html, body').animate({
			scrollTop:$($(this).attr('href')).offset().top
		},800);
	});
	
	//loading screen
	  $(window).load(function(){
		  $(".preloader-wrapper").fadeOut(2000,
		  function(){
			  $(this).parent().fadeOut(1500)
		  });
	  });  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  