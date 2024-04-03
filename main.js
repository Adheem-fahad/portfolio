import "./style.css";
import "./utilities/utilities.css";
import { el, css } from "./utilities/utilities.js";

import S0 from "./pages/s0.js";
import S1 from "./pages/s1.js";
import Color from "./utilities/colorSet.js";
import S2 from "./pages/s2.js";
import scroll from "./pages/scroll.js";

scroll();
export let clrHandler = new Color();

let s0 = new S0();
export let s1 = new S1();
export let s2 = new S2();
