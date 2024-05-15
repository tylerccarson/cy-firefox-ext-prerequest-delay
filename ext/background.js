chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // make the request in question to our local server
  fetch("http://localhost:8000/test")
    .then((response) => {
      return response.text();
    })
    .then((response) => {
      sendResponse(response);
    });

  return true;
});
