// create Agora client
var client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

var localTracks = {
  audioTrack: null
};
var remoteUsers = {};
// Agora client options
var options = {
  appid: null,
  channel: null,
  uid: null,
  token: null
};

// the demo can auto join channel with params in url
$(() => {
  var urlParams = new URL(location.href).searchParams;
  options.appid = urlParams.get("appid");
  options.channel = urlParams.get("channel");
  options.token = urlParams.get("token");
  if (options.appid && options.channel) {
    $("#appid").val(options.appid);
    $("#token").val(options.token);
    $("#channel").val(options.channel);
    $("#join-form").submit();
  }
})

$("#leave").click(function (e) {
  leave();
})

function Join(roomName, userID){
	
	//console.log(roomName);
	_channel = "Test Room: " + roomName;
	
	userId = userID;
    join().then(val => {        
    })
}

async function join() {
	
	$("#join").attr("disabled", true);
	$("#leave").attr("disabled", false);	
	options.channel = _channel;
	console.log(options.channel);
	options.appid = _appID;
    //options.token = _token;
    
	//console.log(_token);

	// add event listener to play remote tracks when remote user publishs.
	client.on("user-published", handleUserPublished);
	client.on("user-unpublished", handleUserUnpublished);
	
	// join a channel and create local tracks, we can use Promise.all to run them concurrently
	[ options.uid, localTracks.audioTrack ] = await Promise.all([
		// join the channel
		client.join(options.appid, options.channel, options.token || null),
		// create local tracks, using microphone
		AgoraRTC.createMicrophoneAudioTrack(),
	
	]);
	
	console.log("My userID: " + userId);
	
	setTimeout(SendUID(options.uid), 10000);
	
	//$("#local-player-name").text(`localAudio(${options.uid})`);
	
	// publish local tracks to channel
	await client.publish(Object.values(localTracks));
	console.log("publish success");
}

function SendUID(uid){
	
	var ID = ""+uid;
	unityInstance.SendMessage(userId + "", 'SetUID', ID.slice(0,6));
	
}

function Disconnect(){
	
	leave().then(val => {        
    })
}


async function leave() {
  for (trackName in localTracks) {
    var track = localTracks[trackName];
    if(track) {
      track.stop();
      track.close();
      localTracks[trackName] = undefined;
    }
  }

  // remove remote users and player views
  remoteUsers = {};
  $("#remote-playerlist").html("");

  // leave the channel
  await client.leave();

  $("#local-player-name").text("");
  $("#join").attr("disabled", false);
  $("#leave").attr("disabled", true);
  console.log("client leaves channel success");
}

async function subscribe(user, mediaType) {
  const uid = user.uid;
  // subscribe to a remote user
  await client.subscribe(user, mediaType);
  console.log("subscribe success");
  if (mediaType === 'audio') {
    user.audioTrack.play();
	console.log(user.audioTrack.getVolumeLevel());
	//SetVolue();
  }
}

function handleUserPublished(user, mediaType) {
  const id = user.uid;
  remoteUsers[id] = user;
  subscribe(user, mediaType);
}

function handleUserUnpublished(user) {
  const id = user.uid;
  delete remoteUsers[id];
  $(`#player-wrapper-${id}`).remove();
}
