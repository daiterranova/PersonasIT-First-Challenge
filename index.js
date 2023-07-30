const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const dropdownOptions = document.getElementById("option");
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
  if (
    dropdownMenu.classList.contains("show") ||
    dropdownOptions.classList.contains("show")
  ) {
    toggleDropdown();
  }
});
