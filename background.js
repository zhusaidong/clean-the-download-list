//@document https://developer.chrome.com/extensions/downloads#method-erase
chrome.downloads.onChanged.addListener(function(downloadDelta) {
	//download status = complete or user canceled it
    if(downloadDelta.state != undefined && (downloadDelta.state.current == "complete" || (downloadDelta.state.current == "interrupted" && downloadDelta.error.current == "USER_CANCELED"))){
        setTimeout(function(){
            chrome.downloads.erase({id:downloadDelta.id});
			//Download reminder bar at the bottom of the page
			setTimeout(function(){
				chrome.downloads.setShelfEnabled(false);
				setTimeout(function(){
					chrome.downloads.setShelfEnabled(true);
				},500);
			},500);
        },5000);
    }
});
