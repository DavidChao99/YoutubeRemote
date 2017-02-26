document.getElementById("search").onclick = function() {
	retrievePlaylist();
};

document.getElementById("load").onclick = function() {
	//loadPlaylist();
};

document.getElementById("save").onclick = function() {
	
}

document.getElementById("add").onclick = function() {
	window.location.href="searchPopup.html";
}


function clearList() {
	$('#results').empty();
}


function retrievePlaylist() {
	// $.ajax({
	// 	url:"https://www.googleapis.com/youtube/v3/playlists",
	// 	data: {part: "snippet", mine: true, key: "AIzaSyBaKZ-wfnjzULVeO6811weM3Vi84Edy5Ro"},
	// 	datatype: "json",

	// 	success: function(result) {
	// 		var playlistArray = result.items;
	// 		for(var i = 0; i < playlistArray.length; i ++) {
	// 			var playListTitle = playlistArray[i].snippet.title;
	// 			var playListThumburl = playlistArray[i].snippet.thumbnails.default.url;
	// 			var playListThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image  Available."></pre>';
			
	// 			$('#results').append("<pre> <div id="+i+">"+playListTitle + playListThumbimg + "</div></pre>");
	// 		}
	// 	}
	// })
	
	$('#results').append("<pre> <div id = 'demo'> web-dev" + '<pre><img id="thumb" src = "'+"https://i.ytimg.com/vi/y6120QOlsfU/default.jpg"+'" alt = "no Image Available."></pre>' + "</div></pre>");

	document.getElementById("demo").onclick= function() {
		clearList();
		$('#results').append("<pre> <div> Darude - Sandstorm <pre><img id='thumb' src = 'https://i.ytimg.com/vi/y6120QOlsfU/default.jpg'  alt = 'No Image Available.'></pre>  </div></pre>");
		$('#results').append("<pre> <div> Brightstorm in charge of bringing the flux back <pre><img id='thumb' src = 'https://i.ytimg.com/vi/HtmEFHw8K-A/default.jpg'  alt = 'No Image Available.'></pre>  </div></pre>");
	}

}

