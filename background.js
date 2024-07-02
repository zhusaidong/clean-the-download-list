//@document https://developer.chrome.com/extensions/downloads#method-erase
chrome.downloads.onChanged.addListener(function(downloadDelta) {
	//download status = complete or user canceled it
    if(downloadDelta.state !== undefined && (downloadDelta.state.current === "complete" || (downloadDelta.state.current === "interrupted" && downloadDelta.error.current === "USER_CANCELED"))){
        setTimeout(function(){
			console.log("erase the downloads");
            console.log("downloadDelta", downloadDelta)
            chrome.downloads.erase({id:downloadDelta.id}).then(ids=>{
                console.log("erase the ids", ids);
            });
			//Download reminder bar at the bottom of the page
			chrome.downloads.setShelfEnabled(false);
            chrome.downloads.setShelfEnabled(true);
            //chrome.downloads.setUiOptions({enabled:false})
        },5000);
    }
});
