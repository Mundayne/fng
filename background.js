chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("./html/main.html", {
    "innerBounds": {
      "width": 500,
      "height": 500
    }
  });
});
