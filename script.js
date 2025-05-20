document.addEventListener("DOMContentLoaded", function () {
  const selectBox = document.getElementById("topic");
  const messageBox = document.getElementById("message");
  const sendBtn = document.querySelector(".styled-form .btn");

  if (selectBox && messageBox) {
    selectBox.addEventListener("change", function () {
      const value = this.value;

      switch (value) {
        case "oferta":
          messageBox.placeholder = "Ju lutem përshkruani kërkesën për ofertë...";
          break;
        case "partneritet":
          messageBox.placeholder = "Jeni të interesuar për bashkëpunim? Na tregoni më shumë...";
          break;
        case "ankesë":
          messageBox.placeholder = "Shkruani ankesën tuaj në detaje këtu...";
          break;
        case "tjetër":
          messageBox.placeholder = "Na tregoni si mund t'ju ndihmojmë...";
          break;
        default:
          messageBox.placeholder = "Shkruani mesazhin këtu...";
      }

      selectBox.style.backgroundColor = "#f0f0f0";
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", function () {
      sendBtn.classList.add("btn-clicked");
      setTimeout(() => {
        sendBtn.classList.remove("btn-clicked");
      }, 200);
    });
  }

  const progressFills = document.querySelectorAll(".progress-fill");
  progressFills.forEach(bar => {
    const target = bar.getAttribute("data-progress");
    setTimeout(() => {
      bar.style.width = target + "%";
    }, 500);
  });
});
