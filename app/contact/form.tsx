"use client";

import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        window.location.href = "/contact/thankyou";
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          placeholder="Name (required)"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail (required)"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <textarea
          placeholder="Message (required)"
          name="message"
          className="input input-bordered w-full max-w-lg h-[200px] break-words p-4"
          required
        />
        <button
          type="submit"
          className="btn btn-primary w-20"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            <IoIosSend size={30} />
          )}
        </button>
      </form>
    </div>
  );
}
