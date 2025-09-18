const sections = Array.from(document.querySelectorAll("section"));

function checkSections() {
  sections.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0
  );
}

window.addEventListener("load", checkSections);   
window.addEventListener("scroll", checkSections);
