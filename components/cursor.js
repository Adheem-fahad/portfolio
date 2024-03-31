import { el, css, prependChild } from "../utilities/utilities";

async function delay(time) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
export default class Cursor {
  constructor(root, target1, target2, fnrun) {
    this.cursor(root, target1[0], target1[1], target2[0], target2[1], fnrun);
  }
  async sameFn(target) {
    await delay(500);
    this.cursorEl.style.transition = `0.1s linear`;
    this.cursorEl.style.scale = 0.8;

    await delay(200);
    target.click();
    this.cursorEl.style.scale = 1;
  }
  async cursor(root, target1, targetPa, target2, targetPa2, fnrun) {
    this.cursorEl = el("div", root, ["class", "cursor"]);
    css(this.cursorEl, {
      left: `${root.clientWidth - this.cursorEl.clientWidth}px`,
      top: `${root.clientHeight - this.cursorEl.clientHeight}px`,
    });

    // await delay(1500)
    css(this.cursorEl, {
      left: `${
        target1.offsetLeft + targetPa.offsetLeft + this.cursorEl.clientWidth
      }px`,
      top: `${target1.offsetTop + targetPa.offsetTop}px`,
    });

    await delay(900);
    target1.classList.add("hover-file-item");

    await this.sameFn(target1);
    console.log("cursor movin");

    await delay(700);
    this.cursorEl.style.transition = `1s ease-in-out`;
    css(this.cursorEl, {
      left: `${
        target2.offsetLeft + targetPa2.offsetLeft + this.cursorEl.clientWidth
      }px`,
      top: `${target2.offsetTop + targetPa2.offsetTop}px`,
    });

    await delay(900);
    target2.style.backgroundColor = "grey";

    await this.sameFn(target2);

    fnrun();
    // fnrun(argsArr, root);
  }
}
