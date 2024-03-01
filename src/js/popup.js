// popup.js
// job  : Sends message to service worker, gets response
// lic  : https://opensource.org/license/mit
// repo : https://github.com/dofufa/chrome-message-passing-1
console.log('ext-popup');

const message = { name: 'from-popup',
  options: { ramen: ['string', 'string', 'string'] }
};

chrome.runtime.sendMessage(message, (response) => {
  console.log('response received by popup, from service worker')
  console.log('response: %o', response);
  console.log();
});
