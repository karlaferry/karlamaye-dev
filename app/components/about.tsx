import React from "react";

export default function About() {
  return (
    <div className="p-6 py-6 opacity-0 animate-fade-in">
      <h1 className="md:text-4xl text-2xl py-2">hello there, friend 👋🏼</h1>
      <div className="lg:text-2xl md:text-xl text-sm">
        <p className="pb-6 leading-8 lg:leading-10">My name is Karla.</p>
        <p className="pb-6 leading-8 lg:leading-10">
          I am a <span className="font-bold">Software Engineer</span> with 2+
          years of commercial experience. I am based in{" "}
          <span className="font-bold">Newcastle Upon Tyne, England</span>, and
          originally from the Philippines. I am a bookworm, a gamer, a musician,
          and I have two cats! 🐈‍⬛🐈‍⬛
        </p>
        <p className="pb-6 leading-8 lg:leading-10">
          My coding journey began at 11 years old, when I was first introduced
          to HTML <span className="italic">(when marquees were cool)</span> and
          CSS. Life got in the way and I ended up doing some freelance writing
          and desk jobs.
        </p>
        <p className="pb-6 leading-8 lg:leading-10">
          The coding gods must have been watching, because in 2021, I was
          granted a scholarship and joined the{" "}
          <span className="font-bold">
            Northcoders Full Stack Coding Bootcamp
          </span>{" "}
          remotely.{" "}
          <a
            target="_blank"
            className="link link-hover"
            href="https://medium.com/@karlacodes/list/coding-bootcamp-series-d15a0ff713c5"
          >
            You can read through my weekly blog here.
          </a>{" "}
        </p>
        <p>
          Since then, I&apos;ve been on a journey of continuous learning and
          growth in the tech industry.
        </p>
      </div>
    </div>
  );
}
