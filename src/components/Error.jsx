import React, { useContext } from "react";
import { AppContext } from "../store/store";
import NewsCard from "./NewsCard";
import { sampleNews } from "../sampleNews";

function Error() {
  const { error } = useContext(AppContext);
  const errorList = {
    400: {
      heading: "Bad Request",
      description:
        "The request was unacceptable, often due to a missing or misconfigured parameter.",
    },
    401: {
      heading: "Unauthorized",
      description:
        "Your API key was missing from the request, or wasn't correct.",
    },
    404: {
      heading: "Network Error",
      description:
        "Looks like you are offline. Please check your internet connection.",
    },
    426: {
      heading: "Data Not For Production Use",
      description: "Upgrade of current plan required.",
    },
    429: {
      heading: "Too Many Requests",
      description:
        "You made too many requests within a window of time and have been rate limited. Back off for a while.",
    },
    500: {
      heading: "Server Error",
      description: "Something went wrong on our side.",
    },
    524: {
      heading: "Server Error",
      description: "Something went wrong on API data provider.",
    },
  };

  return (
    error && (
      <>
        <div className="my-4 mx-auto p-3 rounded-xl hover:outline hover:outline-offset-4 hover:outline-2 hover:outline-black text-white bg-black w-fit">
          <div className="text-lg font-semibold text-center">
            {errorList[error].heading}
          </div>
          <div className="text-center">{errorList[error].description}</div>
        </div>
        <div className="my-2 mx-auto p-3 rounded-xl hover:outline hover:outline-offset-4 hover:outline-2 hover:outline-black text-white bg-black w-fit">
          <div className="text-center">Note: Showing Sample Data</div>
        </div>
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {sampleNews.map((element, index) => (
            <div className="" key={index}>
              <NewsCard
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                author={element.author}
                date={element.publishedAt}
                content={element.content}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </>
    )
  );
}

export default Error;
