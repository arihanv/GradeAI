"use client";

import { useEffect, useState } from "react";

function onSubmit() {
  console.log("Submit clicked");
}

export default function Submit() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      onSubmit();
      
      setClicked(false);
    }
  }, [clicked]);

  return (
    <button onClick={() => setClicked(true)}>Grade Essay</button>
  );
}
