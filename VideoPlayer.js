var videoOpen = false;
var videoTitle;
var videoText;
var videoLink;
var linkURL;

$(document).keydown(function(e){
	
    if (e.which == 27) { 
       CloseVideo();
    }
});

$(window).resize(function(){
	
	$("#videoPlayer").css({
		left: $("#videoPlayerHolder").width()/2 - $("#videoPlayer").width()/2,
	});
	
});

function SetVideo(){
	$("#videoPlayer").css({
		left: $("#videoPlayerHolder").width()/2 - $("#videoPlayer").width()/2,
	});
}

function SetLink(url){
	linkURL = url;
}

function OpenLink(){
	
	window.open(linkURL);
}

function OpenVideo(url, title, bottomText, linkText){
	
	videoTitle = title;
	videoText = bottomText;
	videoLink = linkText;

	$("#videoTitle").html(videoTitle);
	$("#videoText").html(videoText);
	$("#videoLink").html(videoLink);
	$("#videoPlayerHolder").css({display: "inline", opacity: 0});
	$("#videoPlayer").css({
		left: $("#videoPlayerHolder").width()/2 - $("#videoPlayer").width()/2,
	});
	$("#videoPlayerHolder").animate({opacity: 1}, 800);
	$("#video").attr('src', url);
	$("#video")[0].load();
	$("#video")[0].volume = 0.25;
	$("#video").trigger('play');	
	videoOpen = true;	
}

function CloseVideo(){
	
	videoOpen = false;
	$('#video').trigger('pause');
	$("#videoPlayerHolder").animate({opacity: 0}, 800);
	setTimeout(Close, 800);	
}

function Close(){
	
	videoOpen = false;
	$("#videoPlayerHolder").css({display: "none", opacity: 0});
	
}