import "./style.css";
import "./utilities/utilities.css";
import { el, css } from "./utilities/utilities.js";

import S1 from "./pages/s1.js";
import mouseTrack from "./pages/s0.js";

mouseTrack();
let element = el("div", document.querySelector("body"), ["id", "app"]);
element.classList.add("full-center");
let obj = new S1(element);
