
document.getElementById("search-button").onclick = function() {
	keyWordSearch();
};



function keyWordSearch() {
	var query = document.getElementById("query").value;

	$.ajax({
		url:"https://www.googleapis.com/youtube/v3/search",
		data: {part: "snippet", q: query, type: "video", key: "AIzaSyBaKZ-wfnjzULVeO6811weM3Vi84Edy5Ro"},
		datatype: "json",



		success:function(result) {
			console.log("HII");
			var vidIds = "";


			$('#results').empty();
			var resultsArray = result.items;
			console.log(resultsArray);

			for(var i = 0; i < resultsArray.length; i++) {
				vidIds += resultsArray[i].id.videoId + ((i==resultsArray.length-1) ? "" : ", ");
				console.log(vidIds);

			}

			$.ajax({
				url:"https://www.googleapis.com/youtube/v3/videos",
				data: {part: "contentDetails", id: vidIds, key: "AIzaSyBaKZ-wfnjzULVeO6811weM3Vi84Edy5Ro"},
				datatype: "json",

				success: function(results) {

					durationArray = results.items;

					//display it
					for(var i=0; i < resultsArray.length; i ++) {

						// need to work on formatting
						var vidTitle = resultsArray[i].snippet.title + ", duration: " + durationArray[i].contentDetails.duration;
						var vidThumburl = resultsArray[i].snippet.thumbnails.default.url;
						var vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image  Available."></pre>';  
						
						//change this part so that it shows video and clicking it brings u to the page
						$('#results').append("<pre> <div id="+i+">"+vidTitle + vidThumbimg + "</div></pre>");
						
						//set it to call function
						document.getElementById(i).onclick = function() {			
							changeTab(resultsArray[this.id].id.videoId, durationArray[this.id].contentDetails.duration);
						}
						//changeTab(resultsArray[i].id.videoId);
					

					}


				}
			})


		}	



	})


	//modify each link so it calls function to set tab

}


function changeTab(vidId, vidTime) {
	console.log(vidId);

	// Do NOT forget that the method is ASYNCHRONOUS
	chrome.tabs.query({
	}, function(array_of_Tabs) {
	    // Since there can only be one active tab in one active window, 
	    //  the array has only one element

	    var youtubeFound = false;
	    var i = 0;
	    while(!youtubeFound && i < array_of_Tabs.length) {

		    var tab = array_of_Tabs[i];
		    // Example:
		    var url = tab.url;
		    // ... do something with url variable
		    console.log(url);
		    if(url.indexOf("youtube.com") > -1) {
		    	console.log("there is a youtube tab open");
		    	youtubeFound = true;
		    	chrome.tabs.update(tab.id, {url: "https://www.youtube.com/watch?v="+vidId});
		    }
		    else {
		    	console.log("no youtube open");
		    }

		    i++;
		}	

		if(!youtubeFound) {
		    	chrome.tabs.create({url: "https://www.youtube.com/watch?v="+vidId});
		}
	});


}