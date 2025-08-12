"use client";

import React, { useEffect, useState } from "react";
import Form from "./form";
import Socials from "./socials";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ensure the component is visible after mounting
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`${
        isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
      } md:m-20 m-10 flex justify-around flex-col md:flex-row transition-opacity duration-300`}
    >
      <div className="w-full mb-5">
        <h2 className="text-4xl font-bold">contact me</h2>
        <Form />
      </div>
      <div className="w-full mb-5">
        <h2 className="text-4xl font-bold">socials</h2>
        <Socials />
      </div>
    </div>
  );
}
