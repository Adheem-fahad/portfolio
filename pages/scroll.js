import { clrHandler } from "../main";

export default class Scroll {
  constructor() {
    this.s2();
  }
  s1(listener, root) {
    const HEIGHT_OF_ROOT = root.parentElement.clientHeight;
    document.addEventListener("scroll", (e) => {
      const { scrollY } = window;

      listener[0].classList.toggle(
        "fileEXanim",
        scrollY >= (46 / 158) * HEIGHT_OF_ROOT
      );
      listener[1].classList.toggle(
        "vsCodeanim",
        scrollY >= (41 / 158) * HEIGHT_OF_ROOT
      );
      listener[2].classList.toggle(
        "chromeAnim",
        scrollY >= (43 / 158) * HEIGHT_OF_ROOT
      );
      listener[3].classList.toggle(
        "szeroh",
        scrollY >= (54 / 158) * HEIGHT_OF_ROOT
      );

      if (window.scrollY <= 1580 && clrHandler.state) {
        console.log("kundi");
        clrHandler.blackMd();
      }
    });
  }
  s2() {
    document.addEventListener("scroll", (e) => {
      if (window.scrollY >= 1580 && !clrHandler.state) {
        console.log("kundi");
        clrHandler.whiteMd();
      }
    });
  }
}
