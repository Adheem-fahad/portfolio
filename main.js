import "./style.css";
import "./utilities/utilities.css";
import { el, css } from "./utilities/utilities.js";

import S0 from "./pages/s0.js";
import S1 from "./pages/s1.js";
import Color from "./utilities/colorSet.js";
import Scroll from "./pages/scroll.js";

export let scrollHandler = new Scroll();
export let clrHandler = new Color();

let s0 = new S0();
let s1 = new S1();
