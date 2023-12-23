import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import NewsCard from "./NewsCard";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    document.title = `${props.category} | Free News`;
    updateNews();
  }, [props]);

  const updateNews = async () => {
    setLoading(true);
    // props.updateProgress(10);

    let url =
      props.category === "search"
        ? `https://newsapi.org/v2/everything?q=${props.querry}&from=2022-10-${props.newsFrom}&to=2022-10-${props.newsTo}&sortBy=popularity&apiKey=cbdc6197856e4d1c8fe87f5b7de7a51e&page=${page}&pageSize=${props.pageSize}`
        : `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cbdc6197856e4d1c8fe87f5b7de7a51e&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    // props.updateProgress(40);
    let parsedData = await data.json();
    // props.updateProgress(60);

    setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // props.updateProgress(100);
  };

  const fetchMoreData = async () => {
    let url =
      props.category === "search"
        ? `https://newsapi.org/v2/everything?q=${props.querry}&from=2022-10-${
            props.newsFrom
          }&to=2022-10-${
            props.newsTo
          }&sortBy=popularity&apiKey=cbdc6197856e4d1c8fe87f5b7de7a51e&page=${
            page + 1
          }&pageSize=${props.pageSize}`
        : `https://newsapi.org/v2/top-headlines?country=${
            props.country
          }&category=${
            props.category
          }&apiKey=cbdc6197856e4d1c8fe87f5b7de7a51e&page=${page + 1}&pageSize=${
            props.pageSize
          }`;

    setPage((prevPage) => prevPage + 1);
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="my-4">
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-3 gap-2">
          {articles.map((element, index) => (
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
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
  querry: "",
  newsFrom: 1,
  newsTo: new Date().getDate(),
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  querry: PropTypes.string,
  newsFrom: PropTypes.number,
  newsTo: PropTypes.number,
};

export default News;
