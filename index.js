const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    const isActive = panel.classList.contains("active");
    removeActive();
    if (!isActive) {
      panel.classList.add("active");
    }
  });
});

const removeActive = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
