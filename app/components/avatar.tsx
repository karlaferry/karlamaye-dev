import React from "react";
import Image from "next/image";
import headshot from "../assets/headshot.jpeg";

export default function Avatar() {
  return (
    <div className="p-6 opacity-0 animate-fade-in container mx-auto">
      <div className="avatar online">
        <div className="w-80 rounded-full">
          <Image src={headshot} alt="" />
        </div>
      </div>
    </div>
  );
}
