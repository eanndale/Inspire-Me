chrome.browserAction.onClicked.addListener(function(activeTab){
  chrome.tabs.executeScript(null, {file: "popup.js"});
  //var newURL = "http://stackoverflow.com/";
  //chrome.tabs.create({ url: newURL });
});
