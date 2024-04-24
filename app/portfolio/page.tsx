import React from "react";
import Card from "./card";
import { portfolioItems } from "./portfolioItems";

export default function Portfolio() {
  return (
    <div className="opacity-0 animate-fade-in py-6 m-10">
      <ul className="flex gap-10 flex-row flex-wrap justify-center">
        {portfolioItems.map(
          ({ id, name, description, isVideo, media, github, livePreview }) => (
            <li key={id}>
              <Card
                name={name}
                description={description}
                isVideo={isVideo}
                media={media}
                github={github}
                livePreview={livePreview}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}
