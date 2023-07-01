"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
    <div className="w-full flex justify-center fixed bottom-0 mb-3">
    <Button className="w-fit px-6" onClick={() => setClicked(true)}>Grade Essay</Button>
    </div>
  );
}
