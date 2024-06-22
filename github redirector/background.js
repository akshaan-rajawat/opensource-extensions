chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  const url = new URL(details.url);
  if (url.hostname === 'github.com' && url.pathname === '/') {
    chrome.tabs.update(details.tabId, { url: 'https://github.com/akshaan-rajawat' });
  }
});

