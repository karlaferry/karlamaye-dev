import React from "react";
import Image from "next/image";
import headshot from "../assets/headshot.jpeg";

export default function Avatar() {
  return (
    <div className="p-6">
      <div className="avatar online">
        <div className="w-48 rounded-full">
          <Image src={headshot} alt="" />
        </div>
      </div>
    </div>
  );
}
