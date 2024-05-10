import _ from "lodash";
import "./style.css";

import { initLoad } from "./initLoad";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  initLoad();

  return element;
}

document.body.appendChild(component());
