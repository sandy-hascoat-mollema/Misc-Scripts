$(document).ready(function () {

// checking to see how many li (subnav items) are within each ul 


$(".ulDrop_1").each(function() {
    var elem = $(this);
	
	// if 1 drop link published
    if (elem.children(".ulDrop_1 li").length == 1) {
        
		$(".ulDrop_1 .nav_drop_icon_2, .ulDrop_1 .nav_drop_icon_3,.ulDrop_1 .nav_drop_icon_4,.ulDrop_1 .nav_drop_icon_5").hide();
		$(".ulDrop_1 .nav_drop_icon_1").show();
    }

	// if 2 drop links published
    if (elem.children(".ulDrop_1 li").length == 2) {
        
		$(".ulDrop_1 .nav_drop_icon_1, .ulDrop_1 .nav_drop_icon_3,.ulDrop_1 .nav_drop_icon_4,.ulDrop_1 .nav_drop_icon_5").hide();
		$(".ulDrop_1 .nav_drop_icon_2").show();
    }
	// if 3 drop links published
	 if (elem.children(".ulDrop_1 li").length == 3) {
        
		$(".ulDrop_1 .nav_drop_icon_1,.ulDrop_1 .nav_drop_icon_2,.ulDrop_1 .nav_drop_icon_4,.ulDrop_1 .nav_drop_icon_5").hide();
		$(".ulDrop_1 .nav_drop_icon_3").show();
    }
	 // if 4 drop links published
	if (elem.children(".ulDrop_1 li").length == 4) {
       
		$(".ulDrop_1 .nav_drop_icon_1,.ulDrop_1 .nav_drop_icon_2,.ulDrop_1 .nav_drop_icon_3,.ulDrop_1 .nav_drop_icon_5").hide();
		$(".ulDrop_1 .nav_drop_icon_4").show();
    }
	// if 5 drop links published
	if (elem.children(".ulDrop_1 li").length == 5) {
        
		$(".ulDrop_1 .nav_drop_icon_1,.ulDrop_1 .nav_drop_icon_2,.ulDrop_1 .nav_drop_icon_3,.ulDrop_1 .nav_drop_icon_4").hide();
		$(".ulDrop_1 .nav_drop_icon_5").show();
    }
});

$(".ulDrop_2").each(function() {
    var elem = $(this);
	
	// if 1 drop link published
    if (elem.children(".ulDrop_2 li").length == 1) {
        
		$(".ulDrop_2 .nav_drop_icon_2, .ulDrop_2 .nav_drop_icon_3,.ulDrop_2 .nav_drop_icon_4,.ulDrop_2 .nav_drop_icon_5").hide();
		$(".ulDrop_2 .nav_drop_icon_1").show();
    }

	// if 2 drop links published
    if (elem.children(".ulDrop_2 li").length == 2) {
        
		$(".ulDrop_2 .nav_drop_icon_1, .ulDrop_2 .nav_drop_icon_3,.ulDrop_2 .nav_drop_icon_4,.ulDrop_2 .nav_drop_icon_5").hide();
		$(".ulDrop_2 .nav_drop_icon_2").show();
    }
	// if 3 drop links published
	 if (elem.children(".ulDrop_2 li").length == 3) {
        
		$(".ulDrop_2 .nav_drop_icon_1,.ulDrop_2 .nav_drop_icon_2,.ulDrop_2 .nav_drop_icon_4,.ulDrop_2 .nav_drop_icon_5").hide();
		$(".ulDrop_2 .nav_drop_icon_3").show();
    }
	 // if 4 drop links published
	if (elem.children(".ulDrop_2 li").length == 4) {
       
		$(".ulDrop_2 .nav_drop_icon_1,.ulDrop_2 .nav_drop_icon_2,.ulDrop_2 .nav_drop_icon_3,.ulDrop_2 .nav_drop_icon_5").hide();
		$(".ulDrop_2 .nav_drop_icon_4").show();
    }
	// if 5 drop links published
	if (elem.children(".ulDrop_2 li").length == 5) {
        
		$(".ulDrop_2 .nav_drop_icon_1,.ulDrop_2 .nav_drop_icon_2,.ulDrop_2 .nav_drop_icon_3,.ulDrop_2 .nav_drop_icon_4").hide();
		$(".ulDrop_2 .nav_drop_icon_5").show();
    }
});

$(".ulDrop_3").each(function() {
    var elem = $(this);
	
	// if 1 drop link published
    if (elem.children(".ulDrop_3 li").length == 1) {
        
		$(".ulDrop_3 .nav_drop_icon_2, .ulDrop_3 .nav_drop_icon_3,.ulDrop_3 .nav_drop_icon_4,.ulDrop_3 .nav_drop_icon_5").hide();
		$(".ulDrop_3 .nav_drop_icon_1").show();
    }

	// if 2 drop links published
    if (elem.children(".ulDrop_3 li").length == 2) {
        
		$(".ulDrop_3 .nav_drop_icon_1, .ulDrop_3 .nav_drop_icon_3,.ulDrop_3 .nav_drop_icon_4,.ulDrop_3 .nav_drop_icon_5").hide();
		$(".ulDrop_3 .nav_drop_icon_2").show();
    }
	// if 3 drop links published
	 if (elem.children(".ulDrop_3 li").length == 3) {
        
		$(".ulDrop_3 .nav_drop_icon_1,.ulDrop_3 .nav_drop_icon_2,.ulDrop_3 .nav_drop_icon_4,.ulDrop_3 .nav_drop_icon_5").hide();
		$(".ulDrop_3 .nav_drop_icon_3").show();
    }
	 // if 4 drop links published
	if (elem.children(".ulDrop_3 li").length == 4) {
       
		$(".ulDrop_3 .nav_drop_icon_1,.ulDrop_3 .nav_drop_icon_2,.ulDrop_3 .nav_drop_icon_3,.ulDrop_3 .nav_drop_icon_5").hide();
		$(".ulDrop_3 .nav_drop_icon_4").show();
    }
	// if 5 drop links published
	if (elem.children(".ulDrop_3 li").length == 5) {
        
		$(".ulDrop_3 .nav_drop_icon_1,.ulDrop_3 .nav_drop_icon_2,.ulDrop_3 .nav_drop_icon_3,.ulDrop_3 .nav_drop_icon_4").hide();
		$(".ulDrop_3 .nav_drop_icon_5").show();
    }
});

$(".ulDrop_4").each(function() {
    var elem = $(this);
	
	// if 1 drop link published
    if (elem.children(".ulDrop_4 li").length == 1) {
        
		$(".ulDrop_4 .nav_drop_icon_2, .ulDrop_4 .nav_drop_icon_3,.ulDrop_4 .nav_drop_icon_4,.ulDrop_4 .nav_drop_icon_5").hide();
		$(".ulDrop_4 .nav_drop_icon_1").show();
    }

	// if 2 drop links published
    if (elem.children(".ulDrop_4 li").length == 2) {
        
		$(".ulDrop_4 .nav_drop_icon_1, .ulDrop_4 .nav_drop_icon_3,.ulDrop_4 .nav_drop_icon_4,.ulDrop_4 .nav_drop_icon_5").hide();
		$(".ulDrop_4 .nav_drop_icon_2").show();
    }
	// if 3 drop links published
	 if (elem.children(".ulDrop_4 li").length == 3) {
        
		$(".ulDrop_4 .nav_drop_icon_1,.ulDrop_4 .nav_drop_icon_2,.ulDrop_4 .nav_drop_icon_4,.ulDrop_4 .nav_drop_icon_5").hide();
		$(".ulDrop_4 .nav_drop_icon_3").show();
    }
	 // if 4 drop links published
	if (elem.children(".ulDrop_4 li").length == 4) {
       
		$(".ulDrop_4 .nav_drop_icon_1,.ulDrop_4 .nav_drop_icon_2,.ulDrop_4 .nav_drop_icon_3,.ulDrop_4 .nav_drop_icon_5").hide();
		$(".ulDrop_4 .nav_drop_icon_4").show();
    }
	// if 5 drop links published
	if (elem.children(".ulDrop_4 li").length == 5) {
        
		$(".ulDrop_4 .nav_drop_icon_1,.ulDrop_4 .nav_drop_icon_2,.ulDrop_4 .nav_drop_icon_3,.ulDrop_4 .nav_drop_icon_4").hide();
		$(".ulDrop_4 .nav_drop_icon_5").show();
    }
});

$(".ulDrop_5").each(function() {
    var elem = $(this);
	
	// if 1 drop link published
    if (elem.children(".ulDrop_5 li").length == 1) {
        
		$(".ulDrop_5 .nav_drop_icon_2, .ulDrop_5 .nav_drop_icon_3,.ulDrop_5 .nav_drop_icon_4,.ulDrop_5 .nav_drop_icon_5").hide();
		$(".ulDrop_5 .nav_drop_icon_1").show();
    }

	// if 2 drop links published
    if (elem.children(".ulDrop_5 li").length == 2) {
        
		$(".ulDrop_5 .nav_drop_icon_1, .ulDrop_5 .nav_drop_icon_3,.ulDrop_5 .nav_drop_icon_4,.ulDrop_5 .nav_drop_icon_5").hide();
		$(".ulDrop_5 .nav_drop_icon_2").show();
    }
	// if 3 drop links published
	 if (elem.children(".ulDrop_5 li").length == 3) {
        
		$(".ulDrop_5 .nav_drop_icon_1,.ulDrop_5 .nav_drop_icon_2,.ulDrop_5 .nav_drop_icon_4,.ulDrop_5 .nav_drop_icon_5").hide();
		$(".ulDrop_5 .nav_drop_icon_3").show();
    }
	 // if 4 drop links published
	if (elem.children(".ulDrop_5 li").length == 4) {
       
		$(".ulDrop_5 .nav_drop_icon_1,.ulDrop_5 .nav_drop_icon_2,.ulDrop_5 .nav_drop_icon_3,.ulDrop_5 .nav_drop_icon_5").hide();
		$(".ulDrop_5 .nav_drop_icon_4").show();
    }
	// if 5 drop links published
	if (elem.children(".ulDrop_5 li").length == 5) {
        
		$(".ulDrop_5 .nav_drop_icon_1,.ulDrop_5 .nav_drop_icon_2,.ulDrop_5 .nav_drop_icon_3,.ulDrop_5 .nav_drop_icon_4").hide();
		$(".ulDrop_5 .nav_drop_icon_5").show();
    }
});



$('#nav_menu_ul li:not(:has(ul))').addClass("nodrop"); // checking if the parent nav has a drop-down published... if it doesn't then it appied the nodrop class that makes the link clickable in mobile

jQuery('.parent.drop').attr("href", "javascript:void(0)");



//we select the first link 
                //then call the attr method to get back the href value
               var href = $('.nodrop a').attr('href'); 
				
				var href = $('.parent.nodrop').attr('href');
               /* var href = $('.parent.nodrop2').attr('href');
    var href = $('.parent.nodrop4').attr('href');
    var href = $('.parent.nodrop5').attr('href');*/


                //update the results span with the href value
				//jQuery('.nodrop').attr("href", href);
				
				 $('.nodrop a').attr("href",href);
				
                /* $('.parent.nodrop').attr("href",href);
                $('.parent.nodrop2').attr("href",href);
    $('.parent.nodrop4').attr("href",href);
    $('.parent.nodrop5').attr("href",href);*/


});




var ww = 1170;

$(document).ready(function () {
    $(".nav_widget li a").each(function () {
        if ($(this).next().length > 0) {
            $(this).addClass("parent");
        };
    })

    $(".toggleMenu").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".nav_widget").toggle();
    });
    adjustMenu();
})

$(window).bind('load resize orientationchange', function () {
    ww = document.body.clientWidth;
    adjustMenu();
});

var adjustMenu = function () {
    if (ww <= 580) {
        //		$(".toggleMenu1").css("display", "inline-block");
       $(".toggleMenu").css("display", "inline-block");
	   $(".nav_widget").css("clear", "both");
	    $(".nav_widget").hide();
        $(".nav_widget li").unbind('mouseenter mouseleave');
        $(".nav_widget li a.parent").unbind('click').bind('click', function (e) {
            // must be attached to anchor element to prevent bubbling
            e.preventDefault();
            $(this).parent("li").toggleClass("hover");
        });
		
		$(".nav_widget li.nodrop a").unbind('click');
		
		/*$(".nav_widget li a.nodrop").unbind('click');
        $(".nav_widget li a.nodrop2").unbind('click');
        $(".nav_widget li a.nodrop4").unbind('click');
        $(".nav_widget li a.nodrop5").unbind('click');*/
    }
    else if (ww >= 581) {
        $(".toggleMenu").css("display", "none");
        $(".nav_widget").show();
        $(".nav_widget li").removeClass("hover");
        $(".nav_widget li a").unbind('click');
        $(".nav_widget li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function () {
            // must be attached to li so that mouseleave is not triggered when hover over submenu
            $(this).toggleClass('hover');
        });
    }
}







