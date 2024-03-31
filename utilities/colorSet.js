const ROOT = document.querySelector(":root");

export default class Clr {
  constructor() {
    this.state = 0;
  }
  whiteMd() {
    ROOT.style.setProperty("--bg-clr", "white");
    this.state = 1;
  }

  blackMd() {
    ROOT.style.setProperty("--bg-clr", "black");
    this.state = 0;
  }
}
