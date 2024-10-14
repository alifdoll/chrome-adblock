console.log("TESTEST");
let use_ext = true;

let current_url = window.location.href;

if (use_ext) removeImageAds();

function removeImageAds() {
  // YOUTUBE
  let ads = document.querySelectorAll("div#masthead-ad, ytd-ad-slot-renderer");
  let style = document.createElement("style");

  style.textContent = `
    ytd-merch-shelf-renderer,
    div#player-ads.style-scope ytd-watch-flexy,
    ytd-player-legacy-desktop-watch-ads-renderer,
    ytd-in-feed-ad-layout-renderer,
    ad-interrupting,
    #masthead-ad {
      display: none !important
    }
    `;

  document.head.appendChild(style);

  let other_ads = document.querySelectorAll("div.full");

  other_ads.forEach((e) => {
    let divs = e.querySelectorAll("div");

    // Need to check if the child are indeed ads or not
    if (divs.length == 2) {
      e.style.display = "none";
    }
  });
}

// Only For Youtube, For now!!
function removeVideoAds() {
  let video = document.querySelector("video");
  let ad_showing = [...document.querySelectorAll(".ad-showing")];

  // Youtube Skip Ad Button ytp-skip-ad-button

  if (ad_showing) {
    debug("IKLAN DITEMUKAN");
    let ad_skip_button = document.querySelector(".ytp-skip-ad-button");
    ad_skip_button?.click();
  }

  if (video) {
    debug("IKLAN VIDEO DITEMUKAN");

    let skips = [".ytp-skip-ad-button"];

    skips.forEach((e) => {
      let skip_element = document.querySelector(e);

      skip_element?.click();
    });
  }
}

function debug(message) {
  const prefix = "DEBUG: ";
  const log_message = `${prefix} ${message}`;
  console.log(log_message);
}
