let is_checked = false;

chrome.action.onClicked.addListener((tab) => {
  is_checked = !is_checked;
  let icon = is_checked ? "check48.png" : "delete48.png";

  if (is_checked) {
    chrome.action.setBadgeText({ text: "25" });
  } else {
    chrome.action.setBadgeText({ text: "" });
  }

  chrome.action.setIcon({
    path: {
      16: icon,
      32: icon,
      48: icon,
      128: icon,
    },
  });
});
