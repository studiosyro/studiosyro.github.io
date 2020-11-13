//Global Vars ----
var pageURL;
var isMobile;
//----------------

//Core Vars-------
var isOpen = false;
var lastValue;
//----------------

function Start(){

	//Check the window size and set isMobile
	if($(window).width() <= 500)
	{
		isMobile = true;
		$("#standard").css({display: "none"});
		$("#mobile").css({display: ""});
	}
	if($(window).width() > 500)
	{
		isMobile = false;
		$("#standard").css({display: ""});
		$("#mobile").css({display: "none"});
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
	$("#loadingBlock").animate({opacity: 1}, 500);
	pageURL = url;
	console.log(pageURL);
	setTimeout(LoadPage, 500);
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

	if(!isMobile)
	{
		StandardController ();
		StandardController ();
	}
	
	if(isMobile)
	{
		MobileController ();
		MobileController ();
	}
	
	Animations();
	
	
//Core Functionality---------
	//Set Logo and Page button positions
	var centerLeft = $(document.body).find(".center").eq(0).offset().left;
	$("#logoButton").css({left: centerLeft,});
	$("#logoButton").find('img').eq(1).css({top: -$("#logoButton").find('img').eq(0).height()});
	$("#hamburgerHolder").css({right: centerLeft,});
	$("#textHolder").css({left: $("#sideVideo").width(),});
	
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
		$("#logoButton").css({});
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
			top: 200 + 150 * index,
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
		//console.log(isOpen);
		
		var backImgSource;
		var maxRandomValue = 8;
		var randy = Math.floor((Math.random() * maxRandomValue) + 0);
		
		if(isOpen)
		{	
			//Dont allow doops just add one if less than max
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
			
			$('#menu').css({'background-image': "url(" + backImgSource + ")"});
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
