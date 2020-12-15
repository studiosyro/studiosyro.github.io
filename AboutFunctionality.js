function MobileScaling(){
	console.log("Is Mobile");
	$("#sideVideo").css({display: "none"});
	$(document.body).find(".center").eq(0).css({
		width: "95%",
		"background-color": "white",
		});
}

$(window).resize(function(){
	if(!isMobile)
	{
		$("#sideVideo").css({display: "default"});
	}
});