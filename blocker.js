console.log("TESTEST");
let use_ext = true;

let current_url = window.location.href;

if (use_ext) remove();

function remove() {
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

    if (divs.length == 2) {
      e.style.display = "none";
      //   console.log(divs);
      //   log(divs);
      //   divs.childNodes?.forEach((child) => {
      //     console.log(child);
      //   });
    }
  });

  // ads?.forEach((e) => {
  //     if(e.)
  // });
}

function log(log, level = "l", ...args) {
  const prefix = "Remove Adblock Thing:";
  const message = `${prefix} ${log}`;
  switch (level) {
    case "e":
    case "err":
    case "error":
      console.error(message, ...args);
      break;
    case "l":
    case "log":
      console.log(message, ...args);
      break;
    case "w":
    case "warn":
    case "warning":
      console.warn(message, ...args);
      break;
    case "i":
    case "info":
    default:
      console.info(message, ...args);
      break;
  }
}
