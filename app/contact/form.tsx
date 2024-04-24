import React from "react";
import { IoIosSend } from "react-icons/io";

export default function Form() {
  return (
    <div className="my-6">
      <form
        action="https://formsubmit.co/c956461989977a2b83cc3f13419920a7"
        method="POST"
        className="flex flex-col gap-5"
      >
        <input type="hidden" name="_subject" value="You Have Mail!" />
        <input
          type="hidden"
          name="_next"
          value="http://karlamaye.dev/contact/thankyou"
        />
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
