import React from "react";
import Form from "./form";
import Socials from "./socials";

export default function Contact() {
  return (
    <div className="opacity-0 animate-fade-in md:m-20 m-10 flex justify-around flex-col md:flex-row">
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
