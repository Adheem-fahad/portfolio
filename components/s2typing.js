import { el, css } from "../utilities/utilities";
import { delay } from "./cursor";

function typingBox(root, array) {
  return new Promise((resolve) => {
    let smallCounter = 0;
    let interval = setInterval(() => {
      console.log(1);
      if (smallCounter == array.length) {
        clearInterval(interval);
        resolve();
      } else {
        root.textContent += array[smallCounter];
        smallCounter++;
      }
    }, 200);
  });
}
export default async function typing(root, secroot, arrOfSent, fn) {
  for (let counter = 0; counter < arrOfSent.length; counter++) {
    const element = arrOfSent[counter].split("");
    let paraROOT = el("li", root);
    el("li", secroot).textContent = counter + 1;
    if (counter == 0 || counter == arrOfSent.length - 1)
      paraROOT.style.color = "orange";
    else paraROOT.style.color = "#081529";
    await typingBox(paraROOT, element);
    await delay(500);
  }
  fn();
}
