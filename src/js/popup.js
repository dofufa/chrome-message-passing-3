// popup.js
// job  : Sends message to content script, gets response
// lic  : https://opensource.org/license/mit
// repo : https://github.com/dofufa/chrome-message-passing-3
console.log('ext-popup');

const message = { name: 'from-popup',
  options: { ramen: ['string', 'string', 'string'] }
};

chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, {"message": message},{}, (response) => {
    console.log('response received by popup, from content script')
    console.log('response: %o', response);
    console.log();
  });
});
