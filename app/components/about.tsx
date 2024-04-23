import React from "react";

export default function About() {
  return (
    <div className="p-6 py-6">
      <h1 className="text-6xl py-2">hello there, friend 👋🏼</h1>
      <p className="py-2 text-xl leading-8">My name is Karla.</p>
      <p className="py-2 text-xl leading-8">
        I am a{" "}
        <span className="text-xl font-bold font-mono">
          Full Stack Developer
        </span>{" "}
        with 2+ years of commercial experience. I am based in Newcastle Upon
        Tyne, England, and originally from the Philippines. I am a bookworm, a
        gamer, a musician, and I have two cats! 🐈‍⬛🐈‍⬛
      </p>
      <p className="py-2 text-xl leading-8">
        My coding journey began at 11 years old, when I was first introduced to
        HTML (when marquees were cool) and CSS. Life got in the way and I ended
        up doing some freelance writing and desk jobs.
      </p>
      <p className="py-2 text-xl leading-8">
        The coding gods must have been watching, because in 2021, I was granted
        a scholarship and joined the Northcoders Full Stack Coding Bootcamp
        remotely. It was an intensive 13-week bootcamp that became my solid
        foundation and kickstarted my career in development. You can read
        through my journey here, where I blogged my experience weekly.
      </p>
    </div>
  );
}
