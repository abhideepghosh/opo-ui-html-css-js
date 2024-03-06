const sidebarButton = document.querySelector(".sidebar-button");
const sidebar = document.querySelector("#logo-sidebar");

sidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("translate-x-full");
});
