import { clrHandler } from "../main";
import { s2 } from "../main";
export default class Scroll {
  constructor() {
    this.s2fn();
  }
  s1(listener, root) {
    this.HEIGHT_OF_ROOT = root.parentElement.clientHeight;
    document.addEventListener("scroll", (e) => {
      const { scrollY } = window;

      listener[0].classList.toggle(
        "fileEXanim",
        scrollY >= (46 / 158) * this.HEIGHT_OF_ROOT
      );
      listener[1].classList.toggle(
        "vsCodeanim",
        scrollY >= (41 / 158) * this.HEIGHT_OF_ROOT
      );
      listener[2].classList.toggle(
        "chromeAnim",
        scrollY >= (43 / 158) * this.HEIGHT_OF_ROOT
      );
      listener[3].classList.toggle(
        "szeroh",
        scrollY >= (50 / 158) * this.HEIGHT_OF_ROOT
      );

      if (scrollY < (3.5 / 4) * this.HEIGHT_OF_ROOT && clrHandler.state) {
        clrHandler.blackMd();
      }
    });
  }
  s2fn() {
    let counter = 0;
    document.addEventListener("scroll", (e) => {
      if (
        window.scrollY >= (3 / 4) * this.HEIGHT_OF_ROOT &&
        !clrHandler.state
      ) {
        clrHandler.whiteMd();
      }
      if (window.scrollY > this.HEIGHT_OF_ROOT && counter == 0) {
        s2.typingBox();
        counter++;
      }
    });
  }
}
