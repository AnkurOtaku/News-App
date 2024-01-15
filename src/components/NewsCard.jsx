import React from "react";
import defaultImage from "./default_news_image.png";
import { useState } from "react";
import he from "he";

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date }) => {
  const [toggleTitle, setToggleTitle] = useState(true);
  const decodedTitle = he.decode(title);

  return (
    <div
      className="w-full border rounded-md h-full overflow-x-hidden shadow-md hover:border-[#A13737] hover:border-2"
      onMouseEnter={() => setToggleTitle(false)}
      onMouseLeave={() => setToggleTitle(true)}
    >
      <img
        src={
          imageUrl
            ? imageUrl ===
              "https://transasianews.com/sites/all/modules/glossify/info.png"
              ? defaultImage
              : imageUrl
            : imageUrl
        }
        className="w-full object-cover aspect-video"
        alt="..."
        loading="lazy"
      />
      <div>
        <div className="mx-2 text-lg break-words font-semibold">
          {toggleTitle
            ? `${decodedTitle.slice(0, 60)}${
                decodedTitle.length >= 60 ? "..." : ""
              }`
            : decodedTitle}
        </div>
        <p className="mx-2 text-wrap break-words">
          {description ? description.slice(0, 120) : "No description fetched"}
          ...
        </p>
        <br />
        {newsUrl && (
          <a
            target="_blank"
            rel="noreferrer"
            href={newsUrl}
            className="rounded-md p-2 m-2 bg-[#A13737] text-white"
          >
            Read More
          </a>
        )}
      </div>
      <br />
      <small className="text-gray-500 text-sm mx-2">
        By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
      </small>
    </div>
  );
};

export default NewsItem;
