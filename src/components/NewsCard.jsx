import React from "react";
import defaultImage from "./default_news_image.png";

const NewsItem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date
}) => {
  return (
    <div className="w-full border rounded-md h-full overflow-x-hidden hover:shadow-xl hover:shadow-[#A13737]">
      <img
        src={imageUrl ? imageUrl==="https://transasianews.com/sites/all/modules/glossify/info.png"? defaultImage: imageUrl : defaultImage}
        className="object-cover aspect-video"
        alt="..."
        loading="lazy"
      />
      <div>
        <div className="mx-2 text-lg break-words font-semibold">
          {title.slice(0, 60)}
        </div>
        <p className="mx-2 text-wrap break-words">
          {description ? description.slice(0, 120) : "No description fetched"}...
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
