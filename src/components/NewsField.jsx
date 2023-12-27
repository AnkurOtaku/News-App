import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../store/store";
import Loading from "./Loading";
import NewsCard from "./NewsCard";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsField = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const { country, querry, category } = useContext(AppContext);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    setArticles([]);
    setTotalResults(0);
    setPage(1);
    updateNews();
  }, [country, querry, category]);

  const updateNews = async () => {
    setLoading(true);

    try {
      let url = country
        ? `https://newsapi.org/v2/top-headlines?country=${country.code}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`
        : `https://newsapi.org/v2/everything?q=${
            querry ? querry : props.querry
          }&from=2022-10-${props.newsFrom}&to=2022-10-${
            props.newsTo
          }&sortBy=popularity&apiKey=${apiKey}&page=${page}&pageSize=${
            props.pageSize
          }`;

      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching current news data:", error);
    }
  };

  const fetchMoreData = async () => {
    try {
      let url = country
        ? `https://newsapi.org/v2/top-headlines?country=${
            country.code
          }&category=${category}&apiKey=${apiKey}&page=${
            page + 1
          }&pageSize=${props.pageSize}`
        : `https://newsapi.org/v2/everything?q=${
            querry ? querry : props.querry
          }&from=2022-10-${props.newsFrom}&to=2022-10-${
            props.newsTo
          }&sortBy=popularity&apiKey=${apiKey}&page=${page + 1}&pageSize=${
            props.pageSize
          }`;
      setPage((prevPage) => prevPage + 1);
      let data = await fetch(url);
      let parsedData = await data.json();

      setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching current news data:", error);
    }
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
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {articles && (
            articles.map((element, index) => (
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
            ))
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

NewsField.defaultProps = {
  pageSize: 12,
  querry: "new",
  newsFrom: `${currentYear}-${currentMonth}-1`,
  newsTo: `${currentDate}`,
};

NewsField.propTypes = {
  pageSize: PropTypes.number,
  querry: PropTypes.string,
  newsFrom: PropTypes.string,
  newsTo: PropTypes.string,
};

export default NewsField;
