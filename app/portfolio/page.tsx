import React from "react";
import Card from "./card";
import { portfolioItems } from "./portfolioItems";

export default function Portfolio() {
  return (
    <div className="opacity-0 animate-fade-in p-6">
      <ul>
        {portfolioItems.map(
          ({ id, name, description, isVideo, media, github }) => (
            <li key={id}>
              <Card
                name={name}
                description={description}
                isVideo={isVideo}
                media={media}
                github={github}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}
