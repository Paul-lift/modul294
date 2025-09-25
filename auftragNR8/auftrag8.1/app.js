const counterEl = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

function updateCounter(value) {
  counterEl.textContent = value;
  history.pushState({ count: value }, "", "?count=" + value);
}

function getInitialCount() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("count")) || 0;
}

let count = getInitialCount();
counterEl.textContent = count;
history.replaceState({ count: count }, "", "?count=" + count);

plusBtn.addEventListener("click", () => {
  count++;
  updateCounter(count);
});

minusBtn.addEventListener("click", () => {
  count--;
  updateCounter(count);
});

window.addEventListener("popstate", (event) => {
  if (event.state) {
    count = event.state.count;
    counterEl.textContent = count;
  }
});
