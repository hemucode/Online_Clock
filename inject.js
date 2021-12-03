chrome.runtime.onMessage.addListener(function (request) {
    if (request=="adsblockon") {window.location.href = 'chrome-extension://bgmfhbocfgmpfklhgbodhbdnjefhbikk/index.html';
}})  