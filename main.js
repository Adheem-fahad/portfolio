import "./style.css";
import "./utilities/utilities.css";
import { el, css } from "./utilities/utilities.js";

import S0 from "./pages/s0.js";
import S1 from "./pages/s1.js";

let s0 = new S0();
let element = el("div", document.querySelector("body"), ["id", "app"]);
element.classList.add("full-center");
let s1 = new S1(element, s0);
