// loader Start
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loader").classList.remove("hidden");
  // document.body.style.overflow = "hidden";
  setTimeout(function () {
    document.querySelector(".loader").classList.add("hidden");
    // document.body.style.overflow = "";
  }, 2000);
});
