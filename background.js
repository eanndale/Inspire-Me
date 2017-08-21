chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.reload({'url': chrome.extension.getURL('popup.html'), 'selected': true});
});
