"use client";
import "app/globals.css"

import { useEffect } from "react";

export default function Typing() {
  useEffect(() => {
    const typedTextSpan = document.querySelector(".typing");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["easy.", "simple.", "fast.", "efficient", "accurate."];
    const typingDelay = 150;
    const erasingDelay = 75;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent +=
          textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });

  return (
    <div className="typing-parent w-full flex">
      <p className="text-xl">GradeAI makes grading</p>&nbsp;
      <p>
        <span className="typing"></span>
        <span className="cursor">&nbsp;</span>
      </p>
    </div>
  );
}
