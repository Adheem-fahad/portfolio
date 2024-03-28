import { css, el } from "../utilities/utilities";

export default function mouseTrack() {
  const blob_c = el("div", document.querySelector("body"), ["class", "blob"]);

  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;

    blob_c.animate(
      {
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  });
}
