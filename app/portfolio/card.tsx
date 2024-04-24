import React from "react";
import { FaGithub } from "react-icons/fa";

interface Props {
  name: string;
  description: string;
  isVideo: boolean;
  media: string;
  github: string;
}

export default function Card({
  name,
  description,
  isVideo,
  media,
  github,
}: Props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        {isVideo && (
          <iframe
            width="560"
            height="315"
            src={media}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-xs hidden md:block">{description}</p>
        <div className="flex justify-end">
          <a href={github} target="_blank">
            <FaGithub size={40} />
          </a>
        </div>
      </div>
    </div>
  );
}
