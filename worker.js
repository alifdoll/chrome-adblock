let is_checked = false;

chrome.action.onClicked.addListener((tab) => {
  is_checked = !is_checked;
  let icon = is_checked ? "check48.png" : "delete48.png";

  // console.log(icon);
  // console.log(chrome);
  // console.log(chrome.action);
  // chrome.action.setIcon({ path: "check.png" });
  chrome.action.setIcon({
    path: {
      16: icon,
      32: icon,
      48: icon,
      128: icon,
    },
  });

  // const canvas = new OffscreenCanvas(16, 16);
  // const context = canvas.getContext("2d");
  // context.clearRect(0, 0, 16, 16);
  // context.fillStyle = "#00FF00"; // Green
  // context.fillRect(0, 0, 16, 16);
  // const imageData = context.getImageData(0, 0, 16, 16);
  // chrome.action.setIcon({ path: imageData });
});
