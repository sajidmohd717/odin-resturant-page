function initLoad() {
  const displayDiv = document.querySelector("#content");

  const titleH1 = document.createElement("h1");

  titleH1.textContent = "Welcome to Saj Resturant";

  displayDiv.appendChild(titleH1)
}

export { initLoad };