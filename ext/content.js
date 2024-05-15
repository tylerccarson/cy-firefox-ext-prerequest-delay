const button = document.querySelector("button");
button.addEventListener("click", () => {
  chrome.runtime.sendMessage({ message: "hello" }, (response) => {
    const responseSpan = document.getElementById("response");
    responseSpan.textContent = response;
  });
});
