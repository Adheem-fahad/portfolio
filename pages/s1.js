import WindowCreate, {
  vsCodeCnt,
  fileExplorerCnt,
  chromeCnt,
} from "../components/s1cmpts";
import Cursor from "../components/cursor";
import { el, css } from "../utilities/utilities";
import { scrollHandler } from "../main";

async function delay(time) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
let information;
export default class S1 {
  constructor() {
    this.root = el("div", document.getElementById("s1"), ["id", "app"]);
    this.root.classList.add("full-center");

    this.heading = el("h1", this.root, ["class", "sone"]);
    fetch("./information.json")
      .then((response) => response.json())
      .then((json) => {
        this.heading.textContent = json[0].title;
      });

    this.fileWindow = new WindowCreate(
      this.root,
      fileExplorerCnt,
      true,
      14 / 9
    );

    this.vsWindow = new WindowCreate(this.root, vsCodeCnt, false);
    this.chromeWindow = new WindowCreate(
      this.root,
      chromeCnt,
      false,
      1101 / 706
    );

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
      this.root,
      [document.querySelector("#fileItem"), document.querySelector(".fileEx")],
      [document.querySelector("#live-server"), this.vsWindow.windowMain],
      () => {
        scrollHandler.s1(
          [
            this.fileWindow.windowMain,
            this.vsWindow.windowMain,
            this.chromeWindow.windowMain,
            this.heading,
          ],
          this.root
        );
      }
    );
  }
  cleanUp() {
    this.this.root.innerHTML = null;
  }
}
