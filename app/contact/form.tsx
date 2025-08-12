"use client";

import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = "/contact/thankyou";
      } else {
        alert("There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("There was a problem submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-6">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        {/* Hidden field for Netlify forms */}
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Honeypot field for spam protection */}
        <p style={{ display: 'none' }}>
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>
        
        <input
          type="text"
          name="name"
          placeholder="Name (required)"
          className="input input-bordered w-full max-w-xs"
          required
          disabled={isSubmitting}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail (required)"
          className="input input-bordered w-full max-w-xs"
          required
          disabled={isSubmitting}
        />
        <textarea
          placeholder="Message (required)"
          name="message"
          className="input input-bordered w-full max-w-lg h-[200px] break-words p-4"
          required
          disabled={isSubmitting}
        />
        <button 
          type="submit" 
          className={`btn btn-primary w-20 ${isSubmitting ? 'loading' : ''}`}
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
