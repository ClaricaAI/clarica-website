"use client";

import Cal from "@calcom/embed-react";

export default function CalBooking() {
  return (
    <div className="min-h-[500px]">
      <Cal
        calLink="lewisrushton"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ theme: "dark" }}
      />
    </div>
  );
}
