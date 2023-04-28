const portalSelect = document.getElementById("portalSelect");

portalSelect.addEventListener("change", function (event) {
  let selectedValue = event.target.value;
  if (selectedValue === "location") {
    window.location = "location.html";
  }
});
