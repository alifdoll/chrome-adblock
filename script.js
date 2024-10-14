document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").addEventListener("click", function (e) {
    console.info("CHECK");
    let element = e.target;
    if (element == undefined) return;

    let is_true = element.dataset.true;

    if (is_true == "true") {
      element.innerText = "Stop Blocking";
      element.dataset.true = false;
      element.className = "btn btn-danger";
    } else {
      element.dataset.true = true;
      element.innerText = "Start Blocking";
      element.className = "btn btn-primary";
    }
  });
});
