import React from "react";
import { IoIosSend } from "react-icons/io";

export default function Form() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        window.location.href = "/contact/thankyou";
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="my-6">
      <form
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="hidden">
          <input name="bot-field" />
        </div>
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
        <button type="submit" className="btn btn-primary w-20">
          <IoIosSend size={30} />
        </button>
      </form>
    </div>
  );
}
