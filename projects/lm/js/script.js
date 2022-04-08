$(function () {
	"use static";
		//hide place holder on form focus
	$('[placeholder]').focus(function(){
		$(this).attr('data-text',$(this).attr('placeholder'));
		$(this).attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',$(this).attr('data-text'));
	});
   //Smooth Scroll To Div
   
   $('.navbar-nav li a').click(function(){
	   $('html, body').animate({
		   scrollTop: $('#' + $(this).data('value')).offset().top
		   
        }, 1000);
    });
});
//=========================================
 // :: Tooltip Active Code
    $('[data-toggle="tooltip"]').tooltip();

 //==========================================