import * as math from "./math.js";
import style from "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn");
  const result = document.querySelector("#result");

  btn.addEventListener("click", () => {
    result.textContent = math.sum(1, 2);

    console.log(result.textContent);
  });
});
