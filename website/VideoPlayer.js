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
	
	if(isMobile){
		
		$("#videoPlayerHolder").css({
			height: "150%",
		});
		
		$("#videoPlayer").css({
			width: "100%",
		});
		
		$("#videoTitle").css({
			fontSize: "18px",
			marginLeft: "10px"
		});
		
		$("#videoText").css({
			fontSize: "13px",
			margin: "10px",
		});
		
		$("#videoLink").css({
			fontSize: "13px",
			margin: "10px",
		});
		
		$("#closeButton").css({
			fontSize: "18px",
			top: $("#videoTitle").offset().top,
			marginRight: "10px",
		});
	}
}

function SetLink(url){
	linkURL = url;
}

function OpenLink(){
	
	window.open(linkURL);
}

function OpenVideo(url, title, bottomText, linkText){
	
	$("#videoPlayerHolder").stop();
	$("#videoPlayerHolder").click(function(){
	
		CloseVideo();
	
	});
	
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
	$("#videoPlayerHolder").animate({opacity: 1}, 300);
	$("#video").attr('src', url);
	$("#video")[0].load();
	$("#video")[0].volume = 0.25;
	$("#video").trigger('play');	
	videoOpen = true;	
}

function CloseVideo(){
	
	$("#videoPlayerHolder").stop();
	videoOpen = false;
	$('#video').trigger('pause');
	$("#videoPlayerHolder").animate({opacity: 0}, 300);
	setTimeout(Close, 800);	
}

function Close(){
	
	videoOpen = false;
	$("#videoPlayerHolder").css({display: "none", opacity: 0});
	
}