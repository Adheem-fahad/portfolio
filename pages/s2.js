import typing from "../components/s2typing";
import { el, css } from "../utilities/utilities";

export default class S2 {
  constructor() {
    this.father = document.querySelector("#s2");
    this.root = el("div", this.father);
    this.root.classList.add("full-center");
    this.createFirstMango(this.root);
  }
  createFirstMango(root) {
    let textBack = el("h1", root, ["class", "s2text"]);
    fetch("./information.json")
      .then((response) => response.json())
      .then((json) => {
        textBack.textContent = json[1].title;
      });

    let mango1 = el("div", root, ["class", "mango1"]);
    let mangoINFO = el("div", root, ["class", "mangoINFO"]);
    this.mangoINFOED = [el("span", mangoINFO), el("div", mangoINFO)];
    css(mangoINFO, {
      left: `${mango1.offsetLeft + mango1.clientWidth / 2}px`,
      top: `${mango1.offsetTop + mango1.clientHeight / 2}px`,
    });
  }
  typingBox(fn) {
    console.log("called");
    typing(
      this.mangoINFOED[1],
      this.mangoINFOED[0],
      [`{`, `color: "red",`, `amount: 1`, `}`],
      fn
    );
  }
}
