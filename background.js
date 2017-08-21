chrome.browserAction.onClicked.addListener(
    function () {
    chrome.tabs.query({'url': chrome.extension.getURL('popup.html')}, function(tabs) {
        if (tabs.length) { 
            chrome.tabs.reload(tabs[0].tabId); 
        }
        else {
            // create new tab
            chrome.tabs.create({'url': chrome.extension.getURL('popup.html'), 'selected': true});
        }
    });
});
