import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import { LiaCodeSolid } from "react-icons/lia";

interface Props {
  name: string;
  description: string;
  isVideo: boolean;
  media: string | any;
  github: string;
  livePreview: string | any;
}

export default function Card({
  name,
  description,
  isVideo,
  media,
  github,
  livePreview,
}: Props) {
  return (
    <div className="card w-10/12 shadow-xl bg-base-300">
      <figure>
        {isVideo && (
          <iframe
            width="100%"
            height="500"
            src={media}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {!isVideo && !media && (
          <div className="py-6 my-8">
            <LiaCodeSolid size={100} />
          </div>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-xs hidden md:block">{description}</p>
        <div className="flex justify-end gap-3">
          <a href={github} target="_blank">
            <FaGithub size={40} />
          </a>
          {livePreview && (
            <a href={livePreview} target="_blank">
              <FaEye size={40} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
