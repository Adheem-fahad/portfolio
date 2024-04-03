const ROOT = document.querySelector(":root");

export default class Clr {
  constructor() {
    this.state = 0;
  }
  whiteMd() {
    ROOT.style.setProperty("--bg-clr", "rgb(237, 222, 192)");
    this.state = 1;
  }

  blackMd() {
    ROOT.style.setProperty("--bg-clr", "black");
    this.state = 0;
  }
  toggle() {
    if (this.state) this.blackMd();
    else this.whiteMd();
  }
}
