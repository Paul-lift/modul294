const element = document.getElementById("container");
const button = document.getElementById("superButton");

function replaceTextContent(ele, text) {
  ele.textContent = text;
}

window.onload = function () {
replaceTextContent(element, "Erschienen mit 'onload'");
};

button.onclick = function () {
  replaceTextContent(element, "Erschienen mit 'onclick'");
};
