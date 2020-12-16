//Global Vars ----
var pageURL;
var isMobile;
var hasRow;
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
		if($(window).width() < 800 && $(window).width() > 600){

			$("#textHolder").css({
				left: 0,
				paddingLeft: 0,
				width: '100%',
			});
			$(".header").css({
				fontSize: 45,
				padding: 10,
				//textAlign: 'center',
			});
			
			$(".bodyText").css({
				fontSize: 23.3,
				padding: 10,
				//textAlign: 'center',
			});
		}
		if($(window).width() <= 600 && $(window).width() > 500){

			$("#textHolder").css({
				left: 0,
				paddingLeft: 0,
				width: '100%',
			});
			$(".header").css({
				fontSize: 45,
				padding: 10,
				//textAlign: 'center',
			});
			
			$(".bodyText").css({
				fontSize: 20,
				padding: 10,
				//textAlign: 'center',
			});
		}
		if($(window).width() <= 500){

			$("#textHolder").css({
				left: 0,
				paddingLeft: 0,
				width: '100%',
			});
			$(".header").css({
				fontSize: 40,
				padding: 10,
				//textAlign: 'center',
			});
			
			$(".bodyText").css({
				fontSize: 13,
				padding: 10,
				//textAlign: 'center',
			});
		}
	}
	
	if(!isMobile)
	{
		
		$("#sideVideo").css({
			height: $("#textHolder").height(),
		});
			
		//Set the textHolder
		if($(window).width() > 1600){
			
			$("#sideVideo").css({
				height: $("#textHolder").height(),
			});
			
			$("#textHolder").css({
				paddingLeft: 25,
				width: '48%',
				left: $("#sideVideo").height() * 0.5625,
			});
			
			$(".header").css({
				fontSize: 72,
				padding: 0,
				textAlign: '',
			});
			
			$(".bodyText").css({
				fontSize: 26,
				textAlign: '',
			});
		}
		if($(window).width() <= 1600 && $(window).width() > 1500){
			
			$("#sideVideo").css({
				height: 680,
			});
			
			$("#textHolder").css({
				paddingLeft: 25,
				width: '60%',
			});
			
			$(".header").css({
				fontSize: 65,
				textAlign: '',
			});
			
			$(".bodyText").css({
				fontSize: 26,
				textAlign: '',
			});
		}
		
		if($(window).width() <= 1500 && $(window).width() > 1400){
			
			$("#sideVideo").css({
				height: 670,
			});
			
			$("#textHolder").css({
				paddingLeft: 25,
				width: '65%',
			});
			
			$(".header").css({
				fontSize: 65,
				textAlign: '',
			});
			
			$(".bodyText").css({
				fontSize: 26,
				textAlign: '',
			});
		}
		if($(window).width() <= 1400 && $(window).width() > 1300){
			
			$("#sideVideo").css({
				height: 670,
			});
			
			$("#textHolder").css({
				paddingLeft: 25,
				width: '70%',
			});
			
			$(".header").css({
				fontSize: 65,
				textAlign: '',
			});
			
			$(".bodyText").css({
				fontSize: 24,
				textAlign: '',
			});
		}
		
		if($(window).width() <= 1300 && $(window).width() > 1000){
			
			$("#sideVideo").css({
				height: 720,
			});
			
			$("#textHolder").css({
				paddingLeft: 25,
				width: '60%',
			});
			
			$(".header").css({
				fontSize: 65,
				textAlign: '',
			});
			
			$(".bodyText").css({
				fontSize: 20,
				textAlign: '',
			});
		}
		if($(window).width() <= 1000 && $(window).width() >= 800){
			
			$("#sideVideo").css({
				height: 300,
			});
			
			$("#textHolder").css({
				paddingLeft: 25,
				width: '70%',
			});
			
			$(".header").css({
				fontSize: 45,
				textAlign: '',
			});
			
			$(".bodyText").css({
				fontSize: 18,
				textAlign: '',
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
	$("#menuButtonHolder").css({right: centerLeft,});
	
	//Set social buttons for work page
	if(hasRow){
		if(!isMobile)
		{
			$("#socialHolder").css({
				width: "",
				right: centerLeft,
				top: $(document.body).find(".row").eq(1).height() + $(document.body).find(".row").eq(1).offset().top + 13,
			});
		}
	
		if(isMobile)
		{		
			$("#socialHolder").css({
				width: "100%",
				right: 0,
				top: $(document.body).find(".row").eq(4).height() + $(document.body).find(".row").eq(4).offset().top + 13,
			});
		}
	}
		
	//Set social buttons for home page
	if(!hasRow){
		if(!isMobile)
		{
			$("#socialHolder").css({
				width: "",
				right: centerLeft,
				top: $("#videoContainer").height() - 115,
			});
		}
	
		if(isMobile)
		{		
			$("#socialHolder").css({
				width: "100%",
				right: 0,
				top: $("#videoContainer").height() - 115,
			});
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
		$(".center").css({top: 110});
		$("#logoButton").css({
			top: "25px",
		});
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
			fontSize: "20px",
		});
	});
	$("#bannerHolder").find(".bottomText").each(function(index, element){
		$(element).css({
			top:"35px",
			left: "10px",
			fontSize: "13px",
		});
	});
	
}
