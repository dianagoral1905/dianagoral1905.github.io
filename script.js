$(document).ready(function(){
	$(".b").mouseover(function(){$(".buttons").css("marginTop","-10px")});
	$(".b").mouseleave(function(){$(".buttons").css("marginTop","0px")});
	$(".b1").mouseover(function(){
		$(".b1").attr("src","img/b_1.png");
		$(".b1").addClass("Class");
		$(".b1").css("height","140px");
		$(".b4").css("marginLeft","99px");
	});
	$(".b1").mouseleave(function(){
		$(".b1").attr("src","img/b1.png");
		$(".b1").css("height","130px");
		$(".b1").removeClass("Class");
		$(".b4").css("marginLeft","100px");
	});
	$(".b2").mouseover(function(){
		$(".b2").attr("src","img/b_2.png");
		$(".b2").addClass("Class");
		$(".b2").css("height","140px");
	});
	$(".b2").mouseleave(function(){
		$(".b2").attr("src","img/b2.png");
		$(".b2").removeClass("Class");
		$(".b2").css("height","130px");
	});
	$(".b3").mouseover(function(){
		$(".b3").attr("src","img/b_3.png");
		$(".b3").addClass("Class");
		$(".b3").css("height","140px");
	});
	$(".b3").mouseleave(function(){
		$(".b3").attr("src","img/b3.png");
		$(".b3").removeClass("Class");
		$(".b3").css("height","130px");
	});
	$(".b4").mouseover(function(){
		$(".b4").attr("src","img/b_4.png");
		$(".b4").addClass("Class");
		$(".b4").css("height","140px");
	});
	$(".b4").mouseleave(function(){
		$(".b4").attr("src","img/b4.png");
		$(".b4").removeClass("Class");
		$(".b4").css("height","130px");
	});

	$(".next").click(function(){
		var currentImage = $(".img.currently");
		var currentImageIndex = $(".img.currently").index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $(".img").eq(nextImageIndex);
		currentImage.fadeOut(300);
		currentImage.removeClass("currently");
		if (nextImageIndex == ($(".img:last").index() + 1)){
			$(".img").eq(0).fadeIn(300);
			$(".img").eq(0).addClass("currently");
		} else{
			nextImage.fadeIn(300);
			nextImage.addClass("currently");
		}
	});
	$(".prev").click(function(){
		var currentImage = $(".img.currently");
		var currentImageIndex = $(".img.currently").index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $(".img").eq(prevImageIndex);
		currentImage.fadeOut(300);
		currentImage.removeClass("currently");
		prevImage.fadeIn(300);
		prevImage.addClass("currently");
		});

	$(".w1").mouseover(function(){$(".w1").attr("src","img/w_1.png")});
	$(".w1").mouseleave(function(){$(".w1").attr("src","img/w1.png")});
	$(".w2").mouseover(function(){$(".w2").attr("src","img/w_2.png")});
	$(".w2").mouseleave(function(){$(".w2").attr("src","img/w2.png")});
	$(".w3").mouseover(function(){$(".w3").attr("src","img/w_3.png")});
	$(".w3").mouseleave(function(){$(".w3").attr("src","img/w3.png")});
	$(".w4").mouseover(function(){$(".w4").attr("src","img/w_4.png")});
	$(".w4").mouseleave(function(){$(".w4").attr("src","img/w4.png")});
});

