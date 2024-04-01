import { el, css } from "../utilities/utilities";

export default function createNav() {
  const navdiv = el("div", document.querySelector("body"), ["class", "nav"]);

  const navBars = [el("span", navdiv), el("span", navdiv), el("span", navdiv)];
}
