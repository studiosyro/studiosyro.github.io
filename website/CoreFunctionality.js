//Global Vars ----
var pageURL;
var isMobile;
var hasRow;
var isAbout;
//----------------

//Core Vars-------
var isOpen = false;
var lastValue;
//----------------

function Start(){

	//Check the window size and set isMobile if less than 500
	if($(window).width() < 800)
	{
		isMobile = true;
		$("#standard").css({display: "none"});
		$("#mobile").css({display: ""});
		$("#hamburgerHolder").css({display: ""});
		$("#menuButtonHolder").css({display: "none"});
		
	}
	if($(window).width() >= 800)
	{
		isMobile = false;
		$("#standard").css({display: ""});
		$("#mobile").css({display: "none"});
		$("#hamburgerHolder").css({display: "none"});
		$("#menuButtonHolder").css({display: ""});
	}
	ChangeSize();
	ChangeSize();
	$("#loadingBlock").animate({opacity: 0}, 800);
	setTimeout(Hide, 800);
}

function OnPageLoad(){

	$('*').each(function(){ 
		var backImgSource = "";
		if ($(this).is('img')) {
		//	$(this).css("background-image", "url("+ backImgSource +")");
		}
	});
}

function Hide(){
	$("#loadingBlock").css({display: "none"});
	ChangeSize();
}

function Transition(url){

	$("#loadingBlock").css({display: "inline-block"});
	$("#loadingBlock").animate({opacity: 1}, 800);
	pageURL = url;
	console.log(pageURL);
	setTimeout(LoadPage, 800);
}

function LoadPage(){
	window.location.href = pageURL;
}

$(window).resize(function(){

	//Call ChangeSize when window resizes twice for good measure
	ChangeSize();
	ChangeSize();
	isOpen = false;
	
	//Check the window size and set isMobile
	if($(window).width() < 800)
	{
		isMobile = true;
		$("#standard").css({display: "none"});
		$("#mobile").css({display: ""});
	}
	if($(window).width() >= 800)
	{
		isMobile = false;
		$("#standard").css({display: ""});
		$("#mobile").css({display: "none"});
	}
	
	//Call ChangeSize when window resizes twice for good measure
	ChangeSize();
	ChangeSize();
});

function ChangeSize(){
	
	if(isMobile)
	{
		MobileController ();
		MobileController ();		
		$("#hamburgerHolder").css({display: ""});
		$("#menuButtonHolder").css({display: "none"});
		$("#sideLoopHolder").css({display: "none"});
	}
	
	if(!isMobile)
	{
		StandardController ();
		StandardController ();		
		$("#hamburgerHolder").css({display: "none"});
		$("#menuButtonHolder").css({display: ""});
		$("#sideLoopHolder").css({display: ""});		
	}
	
	
//Scale the about page-----
	if(isMobile)
	{
		$(".center").css({top: "120px"});
		
		if($(window).width() <= 800 && $(window).width() > 765){
			$("#textHolder").css({
				left: 20,
				width: '100%',
			});
			$(".header").css({
				fontSize: 72,
			});
			
			$(".bodyText").css({
				fontSize: 16,
			});
			
			$("#coreText").css({
				fontSize: 26,
			});

		}
		
		if($(window).width() <= 765 && $(window).width() > 580){
			$("#textHolder").css({
				left: 20,
				width: '80%',
			});
			$(".header").css({
				fontSize: 60,
			});
			
			$(".bodyText").css({
				fontSize: 14,
			});
			
			$("#coreText").css({
				fontSize: 20,
			});

		}
		
		if($(window).width() <= 580 && $(window).width() >= 0){
			
			$("#textHolder").css({
				left: $(window).width()/2 - $("#textHolder").width()/2 - 10,
				width: '90%',
			});
			$(".header").css({
				fontSize: 38,
			});
			
			$(".bodyText").css({
				fontSize: 15,
				marginRight: "30px",
			});
			
			$("#coreText").css({
				fontSize: 16.5,
				lineHeight: "25px",
				marginRight: "20px",
			});

		}
	}
	
	if(!isMobile)
	{
		$(".center").css({top: "200px"});
		//Set the textHolder
		$("#textHolder").css({
				paddingLeft: 20,
				left: $("#sideVideo").height() * 0.5625,
		});
		
		$("#sideVideo").css({
				height: $("#textHolder").height(),
				left: "0px",
		});
		
		$("#coreText").css({
				lineHeight: "35px",
				marginRight: "0px",
		});
		
		if($(window).width() >= 1600){
			
			$("#textHolder").css({
				width: 750,
			});
			
			$(".header").css({
				fontSize: 72,
			});
			
			$(".bodyText").css({
				fontSize: 16,
			});
			
			$("#coreText").css({
				fontSize: 26,
			});
			
		}
		
		if($(window).width() < 1600 && $(window).width() >= 1190){
			
			$("#textHolder").css({
				width: 750,
			});
			
			$(".header").css({
				fontSize: 72,
			});
			
			$(".bodyText").css({
				fontSize: 16,
			});
			
			$("#coreText").css({
				fontSize: 26,
			});
			
		}
		
		if($(window).width() < 1190 && $(window).width() >= 1032){
			
			
			$("#textHolder").css({
				width: 520,
			});
			
			$(".header").css({
				fontSize: 65,
			});
			
			$(".bodyText").css({
				fontSize: 16,
			});
			
			$("#coreText").css({
				fontSize: 26,
			});
			
			
			$("#textHolder").css({

				left: ($("#sideVideo").height() * 0.5625) - 30,
			});
			
			$("#sideVideo").css({
				height: $("#textHolder").height(),
				left: "-30px",
			});		
						
		}
		
		if($(window).width() < 1032 && $(window).width() >= 970){
			
			$("#textHolder").css({
				width: 500,
			});
			
			$(".header").css({
				fontSize: 65,
			});
			
			$(".bodyText").css({
				fontSize: 16,
			});
			
			$("#coreText").css({
				fontSize: 26,
			});
			
			$("#textHolder").css({

				left: ($("#sideVideo").height() * 0.5625) - 30,
			});
			
			$("#sideVideo").css({
				height: $("#textHolder").height(),
				left: "-30px",
			});			
		}
		
		if($(window).width() < 970 && $(window).width() >= 800){
			
			$("#textHolder").css({
				width: 510,
			});
			
			$(".header").css({
				fontSize: 50,
			});
			
			$(".bodyText").css({
				fontSize: 14,
			});
			
			$("#coreText").css({
				fontSize: 24,
			});	
			
			$("#sideVideo").css({
				height: $("#textHolder").height()/2,
				left: "-30px",
			});
			
			$("#textHolder").css({

				left: ($("#sideVideo").height() * 0.5625) - 30,
			});
			
					
		
		}
		
	}
	
	//-------------------------
	
Animations();
	
	
//Core Functionality---------
	//Set Logo and Page button positions
	var centerLeft = $(document.body).find(".center").eq(0).offset().left;
	$("#logoButton").css({left: centerLeft,});
	$("#logoButton").find('img').eq(1).css({top: -$("#logoButton").find('img').eq(0).height()});
	$("#hamburgerHolder").css({right: centerLeft,});
	$("#menuButtonHolder").css({right: centerLeft + 97,});
	
	//Set social buttons for work page
	if(hasRow){
		if(!isMobile)
		{
			$("#socialHolder").css({
				width: "",
				right: centerLeft,
				top: $(document.body).find(".row").eq(2).height() + $(document.body).find(".row").eq(2).offset().top + 13,
			});
		}
	
		if(isMobile)
		{		
			$("#socialHolder").css({
				width: "100%",
				right: 0,
				top: $(document.body).find(".row").eq(6).height() + $(document.body).find(".row").eq(6).offset().top + 13,
			});
		}
	}
		
	//Set social buttons for home and about page
	if(!hasRow){
		if(!isMobile)
		{
			$("#socialHolder").css({
				width: "",
				right: centerLeft,
				top: $(document).height() - 115,
			});
		}
	
		if(isMobile)
		{		
			$("#socialHolder").css({
				width: "100%",
				right: 0,
				top: $(document).height() - 115,
			});
			
			if(isAbout)
			{		
				$("#socialHolder").css({
					width: "100%",
					right: 0,
					top: $("#formLink").offset().top + 115,
				});
			}
		}
	}
	
	
	if(!isMobile)
	{
		$('#menu').css({width: $(window).width()/3, left: $(window).width()});
		$('#menuHolder').css({width: $(window).width()/3});
		
	}
	if(isMobile)
	{
		$('#menu').css({width: $(window).width(), left: $(window).width()});
		$('#menuHolder').css({width: $(window).width()});
		if(hasRow)
			$(".center").css({top: 110});
		$("#logoButton").css({
			top: "25px",
		});
		$(".centerButton").css({display: "none"});
	}
	
	//Animate Logo Button
	$("#logoButton").mouseenter(function() {
		
		$("#logoButton").find('img').eq(0).stop();
		$("#logoButton").find('img').eq(1).stop();
		$("#logoButton").find('img').eq(0).animate({opacity: 0}, 300);
		$("#logoButton").find('img').eq(1).animate({opacity: 1}, 300);
	});
	$("#logoButton").mouseleave(function() {
		
		$("#logoButton").find('img').eq(0).stop();
		$("#logoButton").find('img').eq(1).stop();
		$("#logoButton").find('img').eq(0).animate({opacity: 1}, 300);
		$("#logoButton").find('img').eq(1).animate({opacity: 0}, 300);
	});
	
	//Animate Page Buttons
	$("#tabHolder").find(".tab").each(function(index, element){
		
		//$(element).find('img').eq(1).css({top: -$(element).find('img').eq(0).height()});
		$(element).css({
			left: $("#menu").width()/2 - $(element).width()/2,
			top: 150 + 150 * index,
			//height:$(element).find('img').eq(0).height(),
		});
	
		$(element).mouseenter(function() {
			
			$(element).find('img').eq(0).stop();
			$(element).find('img').eq(1).stop();
			$(element).find('img').eq(0).animate({opacity: 0}, 300);
			$(element).find('img').eq(1).animate({opacity: 1}, 300);
		});
		$(element).mouseleave(function() {
			
			$(element).find('img').eq(0).stop();
			$(element).find('img').eq(1).stop();
			$(element).find('img').eq(0).animate({opacity: 1}, 300);
			$(element).find('img').eq(1).animate({opacity: 0}, 300);

		});
	
	});
	
	//Menu Buttons
	$("#menuButtonHolder").find(".menuButton").each(function(index, element){
		
		//$(element).find('img').eq(1).css({top: -$(element).find('img').eq(0).height()});
		$(element).css({
			left: ($(element).width() + 10) * index,
			top:  $("#menuButtonHolder").height()/2 - $(element).height()/2,
			width: $("#menuButtonHolder").width()/2 - 3,
			//height:$(element).find('img').eq(0).height(),
		});
	
		$(element).mouseenter(function() {
			
			$(element).find('img').eq(0).stop();
			$(element).find('img').eq(1).stop();
			$(element).find('img').eq(0).animate({opacity: 0}, 300);
			$(element).find('img').eq(1).animate({opacity: 1}, 300);
		});
		$(element).mouseleave(function() {
			
			$(element).find('img').eq(0).stop();
			$(element).find('img').eq(1).stop();
			$(element).find('img').eq(0).animate({opacity: 1}, 300);
			$(element).find('img').eq(1).animate({opacity: 0}, 300);

		});
	
	});
	
	//Center Button
	$("#centerAnnouncement").find(".centerButton").each(function(index, element){
		
	
		$(element).mouseenter(function() {
			
			$(element).find('img').eq(0).stop();
			$(element).find('img').eq(1).stop();
			$(element).find('img').eq(0).animate({opacity: 0}, 300);
			$(element).find('img').eq(1).animate({opacity: 1}, 300);
		});
		$(element).mouseleave(function() {
			
			$(element).find('img').eq(0).stop();
			$(element).find('img').eq(1).stop();
			$(element).find('img').eq(0).animate({opacity: 1}, 300);
			$(element).find('img').eq(1).animate({opacity: 0}, 300);

		});
	
	});
	
	
//-------------------------
}

function Animations(){

	//Animate swap to video on hover
	$(document.body).find(".rowButton").each(function(index, element){	
	
		$(element).mouseenter(function() {
			if(!isMobile)
			{
				$(element).find('img').stop();
				$(element).find('video').stop();
				$(element).find('video').trigger('play');
				$(element).find('img').animate({opacity: 0}, 200);
				$(element).find('video').animate({opacity: 1}, 200);
				$(element).find('video').css({display: "inline-block",});
			}
			
		});
		$(element).mouseleave(function() {
			if(!isMobile)
			{
				$(element).find('img').stop();
				$(element).find('video').stop();
				$(element).find('img').animate({opacity: 1}, 200);
				$(element).find('video').animate({opacity: 0}, 200);
				$(element).find('video').trigger('pause');
			}

		});
	});
	
	//Animate Banner
	$("#bannerHolder").mouseenter(function() {
		if(!isMobile)
		{
			$("#bannerHolder").find('img').stop();
			$("#bannerHolder").find('video').stop();
			$("#bannerHolder").find('video').trigger('play');
			$("#bannerHolder").find('img').animate({opacity: 0}, 300);
			$("#bannerHolder").find('video').animate({opacity: 1}, 300);
			$("#bannerHolder").find('video').css({display: "inline-block",});
			$("#bannerHolder").find('img').css({display: "none",});
		}
	});
	$("#bannerHolder").mouseleave(function() {
		if(!isMobile)
		{
			$("#bannerHolder").find('img').stop();
			$("#bannerHolder").find('video').stop();
			$("#bannerHolder").find('img').css({display: "inline-block",});
			$("#bannerHolder").find('img').animate({opacity: 1}, 300);
			$("#bannerHolder").find('video').animate({opacity: 0}, 300);
			$("#bannerHolder").find('video').css({display: "none",});
			$("#bannerHolder").find('video').trigger('pause');
		}
	});
	
	//Animate hamburgerHolder
	$('#hamburgerHolder').mouseenter(function() {
		if(!isMobile)
		{
			$('#hamburgerHolder').find('i').eq(0).stop();
			$('#hamburgerHolder').find('i').eq(0).animate({opacity: 0.5}, 150);
		}
		
	});
	$('#hamburgerHolder').mouseleave(function() {
		if(!isMobile)
		{
			$('#hamburgerHolder').find('i').eq(0).stop();
			$('#hamburgerHolder').find('i').eq(0).animate({opacity: 1}, 150);
		}
		
	});
}

function RandomLoadingGif(){
	$('*').each(function(){ 
		var backImgSource;
		var randy = Math.floor((Math.random() * 3) + 0);

		if(randy == 0){
		
			backImgSource = "images/gifs/loading0.gif";
		}
		if(randy == 1){
			backImgSource = "images/gifs/loading1.gif";
		}
		if(randy == 2){
			backImgSource = "images/gifs/loading2.gif";
		}
		//backImgSource = "images/gifs/loading.gif";
		if ($(this).is('img')) {
		//	$(this).css({'background-image': "url(" + backImgSource + ")",'background-repeat': 'no-repeat', 'background-position' : 'center', 'background-size' : '25%'});
		}
	});
	
}

//Open Menu Animation
function ClickMenuButton(){
	$('#hamburgerHolder').click(function() {
		$('#menu').stop();
		isOpen = !isOpen;
		console.log(isOpen);
		
		var backImgSource;
		var maxRandomValue = 8;
		var randy = Math.floor((Math.random() * maxRandomValue) + 0);
		
		if(isOpen)
		{	
			//Dont allow doops just add one if there is a repeat and is less than max
			if(lastValue == randy)
			{
				if(randy < maxRandomValue)
				{
					randy++;
				}
				if(randy == maxRandomValue)
				{
					randy = 0;
				}
			}
			if(randy == 0){
				backImgSource = "images/gifs/blueGreenWaves.gif";
			}
			if(randy == 1){
				backImgSource = "images/gifs/bluePurpleAmbient.gif";
			}
			if(randy == 2){
				backImgSource = "images/gifs/water.gif";
			}
			if(randy == 3){
			
				backImgSource = "images/gifs/Money.webp";
			}
			if(randy == 4){
				backImgSource = "images/gifs/dancingCat.gif";
			}
			if(randy == 5){
				backImgSource = "images/gifs/vrEyes.gif";
			}
			if(randy == 6){
				backImgSource = "images/gifs/datBoi.gif";
			}
			if(randy == 7){
				backImgSource = "images/gifs/dolphin.gif";
			}
			
			//$('#menu').css({'background-image': "url(" + backImgSource + ")"});
			lastValue = randy;
		}
		
		if(!isMobile)
		{	
			if(isOpen)
			{
				$('#menu').animate({
				left: $(window).width()/1.5,
				
				},800,);
			}
			if(!isOpen)
			{
				$('#menu').animate({
				left: $(window).width(),
				
				},800);
			}
		}
		if(isMobile)
		{	
			if(isOpen)
			{
				$('#menu').animate({
				left: 0,
				
				},400,);
			}
			if(!isOpen)
			{
				$('#menu').animate({
				left: $(window).width(),
				
				},400);
			}
		}
	}); 
}

function StandardController (){
	
	//Size the Center Div
	$(".center").css({
		height: ($(".row").height() + ($(".rowButton").height() * 2) + $("#bannerHolder").height()) - 200,
		width: "85%",
		position: "relative",
	});
	
	//Size the Banner
	$("#bannerHolder").css({left: 0, width: "100%",});
	
	var rowWidth;
	//Control each row height
	$("#standard").find(".row").each(function(index, element){
		
		var bannerHeight = $("#bannerHolder").height();
		var rowHeight = $(element).height();
		if(index == 0)
		{
			rowWidth = $(element).width();
			//$(element).css({'background-color': "green"});
			$(element).css({height: $(document.body).find(".rowButton").eq(0).height(), top: bannerHeight + 7,});
		}
		if(index == 1)
		{
			rowWidth = $(element).width();
			//$(element).css({'background-color': "blue"});
			$(element).css({height: $(document.body).find(".rowButton").eq(0).height(), top: bannerHeight + rowHeight + 14,});
		}
		if(index == 2)
		{
			rowWidth = $(element).width();
			//$(element).css({'background-color': "blue"});
			$(element).css({height: $(document.body).find(".rowButton").eq(0).height(), top: bannerHeight + rowHeight + rowHeight + 21,});
		}
	});
	
	//Set rowButton position and size
	$("#standard").find(".rowButton").each(function(index, element){	
		
		$(element).css({left: 0, top: $(element).parent().offset.top, width: (rowWidth/3)- 8});
		
		if(index == 0)
		{
			$(element).css({left: 0});
		}
		if(index == 1)
		{
			$(element).css({left: $("#standard").find(".rowButton").eq(0).width() + 12});
		}
		if(index == 2)
		{
			$(element).css({left: rowWidth - $(element).width()});
		}
		if(index == 3)
		{
			$(element).css({left: 0});
		}
		if(index == 4)
		{
			$(element).css({left: $(element).width() + 12});
		}
		if(index == 5)
		{
			$(element).css({left: rowWidth - $(element).width()});
		}
		if(index == 6)
		{
			$(element).css({left: 0});
		}
		if(index == 7)
		{
			$(element).css({left: $("#standard").find(".rowButton").eq(0).width() + 12});
		}
		if(index == 8)
		{
			$(element).css({left: rowWidth - $(element).width()});
		}
	});
	
	//Change font size on scale
	$("#standard").find(".topText").each(function(index, element){
	
		if($(window).width() > 1300){
			$(element).css({fontSize: "25px"});
			//console.log(element);
		}
	
		if($(window).width() < 1300 && $(window).width() >= 800){
			$(element).css({fontSize: "20px"});
		}
		
		if($(window).width() < 800){
			$(element).css({fontSize: "15px"});
		}
	});
	$("#standard").find(".bottomText").each(function(index, element){
	
		if($(window).width() >= 1300){
			$(element).css({top:"44px", fontSize: "18px"});
			
		}

		if($(window).width() < 1300 && $(window).width() >= 800){
			$(element).css({top:"39px", fontSize: "13px"});
		}
		
		if($(window).width() < 800){
			$(element).css({top:"34px", fontSize: "8px"});
		}
	});
	
	//Change banner font size
	$("#bannerHolder").find(".topText").each(function(index, element){
	
		if($(window).width() > 1300){
			$(element).css({fontSize: "25px"});
			//console.log(element);
		}
	
		if($(window).width() < 1300 && $(window).width() >= 800){
			$(element).css({fontSize: "20px"});
		}
		
		if($(window).width() < 800){
			$(element).css({fontSize: "15px"});
		}
	});
	$("#bannerHolder").find(".bottomText").each(function(index, element){
	
		if($(window).width() >= 1300){
			$(element).css({top:"44px", fontSize: "18px"});			
		}

		if($(window).width() < 1300 && $(window).width() >= 800){
			$(element).css({top:"39px", fontSize: "13px"});
		}
		
		if($(window).width() < 800){
			$(element).css({top:"34px", fontSize: "8px"});
		}
	});
	
}

function MobileController (){
	
	//Size the Center Div
	$(".center").css({
		height: ($(".row").height() + ($(".rowButton").height() * 2) + $("#bannerHolder").height()) - 200,
		width: "100%",
		position: "absolute",
		left: 0,
		right: 0,
		backgroundColor: "",
	});
	
	$("#logoButton").css({
		width: "130",
	});
	
	//Size the Banner
	$("#bannerHolder").css({left: 0, width: "100%",});
	
	var rowWidth;
	//Control each row height
	$("#mobile").find(".row").each(function(index, element){
		
		var bannerHeight = $("#bannerHolder").height();
		var rowHeight = $(element).height();
		var rowSpacing = 5;
		if(index == 0)
		{
			rowWidth = $(element).width();
			//$(element).css({'background-color': "green"});
			$(element).css({height: $("#mobile").find(".rowButton").eq(0).height(), top: bannerHeight + rowSpacing,});
		}
		if(index == 1)
		{
			rowWidth = $(element).width();
			//$(element).css({'background-color': "blue"});
			$(element).css({
				height: $("#mobile").find(".rowButton").eq(0).height(), 
				top:  bannerHeight + rowHeight + rowSpacing * 2,
			});
		}
		if(index == 2)
		{
			rowWidth = $(element).width();
			//$(element).css({'background-color': "blue"});
			$(element).css({
				height: $("#mobile").find(".rowButton").eq(0).height(), 
				top: bannerHeight + (rowHeight * 2) + rowSpacing * 3,
			});
		}
		
		if(index == 3)
		{
			rowWidth = $(element).width();
			//$(element).css({'background-color': "blue"});
			$(element).css({
				height: $("#mobile").find(".rowButton").eq(0).height(), 
				top: bannerHeight + (rowHeight * 3) + rowSpacing * 4,
			});
		}
	});
	
	//Set rowButton position and size
	$("#mobile").find(".rowButton").each(function(index, element){	
		
		$(element).css({left: 0, top: $(element).parent().offset.top, width: (rowWidth/2)- 5});
		
		if(index == 0)
		{
			$(element).css({left: 0});
		}
		if(index == 1)
		{
			$(element).css({left: rowWidth - $(element).width()});
		}
		if(index == 2)
		{
			$(element).css({left: 0});
		}
		if(index == 3)
		{
			$(element).css({left: rowWidth - $(element).width()});
		}
		if(index == 4)
		{
			$(element).css({left: 0});
		}
		if(index == 5)
		{
			$(element).css({left: rowWidth - $(element).width()});
		}
		if(index == 6)
		{
			$(element).css({left: 0});
		}
		if(index == 7)
		{
			$(element).css({left: rowWidth - $(element).width()});
		}
		if(index == 8)
		{
			$(element).css({left: 0});
		}
		if(index == 9)
		{
			$(element).css({left: rowWidth - $(element).width()});
		}
	});
	
	//Change font size on buttons
	$("#mobile").find(".topText").each(function(index, element){
		$(element).css({
			top: "10px",
			left: "10px",
			fontSize: "15px",
		});
	});	
	$("#mobile").find(".bottomText").each(function(index, element){
		$(element).css({
			top:"30px",
			left: "10px",
			fontSize: "10px",
		});
	});
	
	//Change font size on banner	
	$("#bannerHolder").find(".topText").each(function(index, element){
		$(element).css({
			top: "10px",
			left: "10px",
			fontSize: "15px",
		});
	});
	$("#bannerHolder").find(".bottomText").each(function(index, element){
		$(element).css({
			top:"30px",
			left: "10px",
			fontSize: "10px",
		});
	});
	
}
