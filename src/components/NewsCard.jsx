import React from 'react';
import Loading from './Loading';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, content }) => {
  return (
    <div className="w-full border rounded-md h-full">
      {imageUrl ? (
        <img src={imageUrl} className="object-cover" alt="..." loading="lazy" />
      ) : (
        <Loading />
      )}
      <div className="">
        <div className="mx-2 text-lg font-semibold">{title.slice(0,60)}</div>
        <p className="mx-2 text-wrap">{description ? description.slice(0,120) : content}...</p>
        <br/>
        <a target="_blank" rel="noreferrer" href={newsUrl} className="rounded-md p-2 m-2 bg-[#A13737] text-white">
          Read More
        </a>
      </div>
      <br/>
      <small className="text-gray-500 text-sm">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small>
    </div>
  );
};

export default NewsItem;
