document.addEventListener("DOMContentLoaded", () => {
  const userMenuButton = document.getElementById("user-menu-button");
  const userMenu = document.querySelector("[aria-labelledby='user-menu-button']");

  if (!userMenuButton || !userMenu) {
    console.error('User menu button or user menu not found.');
    return;
  }

  // Toggle the display of the user menu
  userMenuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const isExpanded = userMenuButton.getAttribute("aria-expanded") === "true";
    userMenuButton.setAttribute("aria-expanded", !isExpanded);
    userMenu.style.display = isExpanded ? "none" : "block";
  });

  // Close the user menu if the user clicks outside of it
  window.addEventListener("click", () => {
    userMenu.style.display = "none";
    userMenuButton.setAttribute("aria-expanded", "false");
  });

  // Prevent the window click event from closing the menu when clicking inside the menu
  userMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
