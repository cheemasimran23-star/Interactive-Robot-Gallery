function upDate(element) {
  console.log("Robot preview selected");

  // Mouse events pass the image; keyboard focus passes its figure.
  const previewPic = element.tagName === "FIGURE"
    ? element.querySelector("img")
    : element;

  if (!previewPic) {
    console.error("No image found for the selected gallery item.");
    return;
  }

  const display = document.getElementById("image");
  display.textContent = previewPic.alt;
  display.style.backgroundImage =
    `linear-gradient(to top, rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.08)), url("${previewPic.src}")`;
}

function undo() {
  console.log("Robot preview reset");
  const display = document.getElementById("image");
  display.textContent = "Hover over or focus on a robot photograph to display it here.";
  display.style.backgroundImage = "none";
}

function addTabindex() {
  console.log("Page loaded - adding tabindex to gallery figures");
  const figures = document.querySelectorAll("figure");
  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute("tabindex", "0");
  }
}
