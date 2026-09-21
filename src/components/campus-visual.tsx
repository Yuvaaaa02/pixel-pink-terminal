import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import campusImage from "@/assets/rvr-campus.jpg";

const RAMP = " .:-=+*#%@";

export function CampusVisual() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [ascii, setAscii] = useState("");
  const [asciiMode, setAsciiMode] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    const convert = () => {
      const cols = window.innerWidth < 640 ? 58 : 100;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx || !image.naturalWidth) return;
      const scale = cols / image.naturalWidth;
      canvas.width = cols;
      canvas.height = Math.max(1, Math.floor(image.naturalHeight * scale * 0.46));
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let output = "";
      for (let y = 0; y < canvas.height; y += 1) {
        for (let x = 0; x < canvas.width; x += 1) {
          const i = (y * canvas.width + x) * 4;
          const lum = ((pixels[i] ?? 0) * 0.299 + (pixels[i + 1] ?? 0) * 0.587 + (pixels[i + 2] ?? 0) * 0.114) / 255;
          output += RAMP[Math.floor((1 - lum) * (RAMP.length - 1))];
        }
        output += "\n";
      }
      setAscii(output);
    };
    image.complete ? convert() : image.addEventListener("load", convert, { once: true });
  }, []);

  return (
    <div className="campus-window flicker-in">
      <div className="window-bar"><span>campus_feed.img</span><span>[ LIVE ]</span></div>
      <div className="campus-media">
        <img ref={imageRef} src={campusImage} alt="R.V.R. and J.C. College of Engineering campus" className={asciiMode ? "visually-hidden" : "campus-photo"} />
        {asciiMode && <pre className="campus-ascii" aria-label="ASCII rendering of R.V.R. and J.C. College of Engineering campus">{ascii || "[ RENDERING CAMPUS FEED... ]"}</pre>}
      </div>
      <div className="window-controls">
        <span>RVR&amp;JC_CAMPUS // GUNTUR</span>
        <Button variant="terminalOutline" size="sm" onClick={() => setAsciiMode((v) => !v)}>
          [ {asciiMode ? "PHOTO MODE" : "ASCII MODE"} ]
        </Button>
      </div>
    </div>
  );
}
