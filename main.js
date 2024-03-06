// Add JS here
document.addEventListener("DOMContentLoaded", function () {
  const collapseButton = document.querySelector(
    '[data-collapse-toggle="navbar-sticky"]'
  );
  const collapseMenu = document.getElementById("navbar-sticky");

  collapseButton.addEventListener("click", function () {
    collapseMenu.classList.toggle("hidden");
  });

  // Optional: Close the menu when clicking outside of it
  document.addEventListener("click", function (event) {
    const isClickInside = collapseMenu.contains(event.target);
    if (!isClickInside && !collapseButton.contains(event.target)) {
      collapseMenu.classList.add("hidden");
    }
  });
});
