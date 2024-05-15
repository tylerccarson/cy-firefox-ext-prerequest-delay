chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("received message", request, sender);

  // make the request in question to our local server
  fetch("http://localhost:8000/test")
    .then((response) => {
      return response.text();
    })
    .then((response) => {
      console.log("sending response", response);
      sendResponse(response);
    });

  return true;
});
