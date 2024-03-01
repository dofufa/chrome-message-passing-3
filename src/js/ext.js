// ext.js
// job  : Receives message from popup context
// lic  : https://opensource.org/license/mit
// repo : https://github.com/dofufa/chrome-message-passing-3
console.log('ext-content-script');

// receiving message from popup to content script, sending response
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const reply = {name: 'from-content-script', sriracha: true};
    console.log('message received by content script, from popup')
    console.log('sender: %o', sender);
    console.log('request: %o', request);
    console.log();
    return sendResponse(reply);
  });
