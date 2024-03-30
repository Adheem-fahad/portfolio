import WindowCreate, {
  vsCodeCnt,
  fileExplorerCnt,
  chromeCnt,
} from "../components/s1cmpts";
import Cursor from "../components/cursor";
import { el, css } from "../utilities/utilities";

let information;
export default class S1 {
  constructor(root, szero) {
    fetch("./information.json")
      .then((response) => response.json())
      .then((json) => {
        el("h1", root).textContent = json[0].title;
      });

    this.root = root;
    this.fileWindow = new WindowCreate(root, fileExplorerCnt, true, 14 / 9);

    this.vsWindow = new WindowCreate(root, vsCodeCnt, false);
    this.chromeWindow = new WindowCreate(root, chromeCnt, false, 1101 / 706);

    this.fileWindow.eventToBtn((e) => {
      this.vsWindow.open();
      this.vsWindow.windowMain.style.animation = `Popup 0.4s cubic-bezier(1,0,.51,.8)`;
      this.vsWindow.windowMain.style.scale = 1;
    });

    document.querySelector("#live-server").addEventListener("click", (e) => {
      this.chromeWindow.open();
      this.chromeWindow.windowMain.style.animation = `Popup 0.4s cubic-bezier(1,0,.51,.8)`;
      this.chromeWindow.windowMain.style.scale = 1;
    });
    new Cursor(
      root,
      [document.querySelector("#fileItem"), document.querySelector(".fileEx")],
      [document.querySelector("#live-server"), this.vsWindow.windowMain],
      () => {
        this.windup(
          this.fileWindow.windowMain,
          this.vsWindow.windowMain,
          this.chromeWindow.windowMain,
          szero
        );
      }
    );
  }
  async windup(x, y, z, s_zero) {
    // file
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 700);
    });

    x.classList.add("fileEXanim");
    // vs
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 200);
    });
    y.classList.add("vsCodeanim");
    // chrome
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
    z.classList.add("chromeAnim");
    css(document.querySelector("#app h1"), {
      fontSize: "2rem",
      filter: "none",
      transition: "1s ease-in-out",
    });

    // s_zero.mouseTrack();
  }
  cleanUp() {
    this.root.innerHTML = null;
  }
}
