import { css, el } from "../utilities/utilities";

export default class S0 {
  constructor() {
    this.blob_c = el("div", document.querySelector("body"));
    this.blob_c.classList.add("blob");
    this.mouseTrack();
  }

  mouseTrack() {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      this.blob_c.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    });
  }
}
