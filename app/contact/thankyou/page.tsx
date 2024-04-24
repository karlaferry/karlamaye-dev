import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function ThankYou() {
  return (
    <div className="opacity-0 animate-fade-in md:m-20 m-10 flex justify-around flex-col items-center">
      <h2 className="text-lg m-5">
        Thank you! I will respond as soon as I can.
      </h2>
      <Link href="/contact">
        <button className="btn btn-primary hover:btn-accent">
          <IoMdArrowBack size={20} /> back
        </button>
      </Link>
    </div>
  );
}
