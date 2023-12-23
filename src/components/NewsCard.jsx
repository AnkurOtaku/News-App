import React from 'react';
import Loading from './Loading';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, content }) => {
  return (
    <div className="w-full border rounded-md h-96">
      {imageUrl ? (
        <img src={imageUrl} className="object-cover" alt="..." loading="lazy" />
      ) : (
        <Loading />
      )}
      <div className="card-body">
        <div className="text-lg font-semibold">{title}</div>
        <p className="text-wrap">{description ? description : content}</p>
        <a target="_blank" rel="noreferrer" href={newsUrl} className="rounded-md bg-[#A13737] text-white">
          Read More
        </a>
      </div>
      <div className="card-footer">
        <small className="text-gray-500 text-sm">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small>
      </div>
    </div>
  );
};

export default NewsItem;
