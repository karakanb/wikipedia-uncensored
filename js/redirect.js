chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            redirectUrl: details.url.replace(".wikipedia.", ".0wikipedia.")
        };
    }, {
        urls: ["*://*.wikipedia.org/*"]
    }, ["blocking"]);