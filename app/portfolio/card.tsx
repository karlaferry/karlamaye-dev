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
    <div className="card md:w-[800px] w-96 bg-base-300 shadow-xl ">
      <figure>
        {isVideo ? (
          <iframe
            width="800"
            height="400"
            src={media}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="py-10">
            <LiaCodeSolid size={200} />
          </div>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end pt-4">
          <a href={github} target="_blank">
            <button className="btn btn-primary hover:btn-accent">GitHub</button>
          </a>
          {livePreview && (
            <a href={livePreview} target="_blank">
              <button className="btn btn-primary hover:btn-accent">Live</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
