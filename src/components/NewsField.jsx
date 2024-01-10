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
  const { country, querry, category, setError } = useContext(AppContext);
  var myHeaders = new Headers();
  myHeaders.append("apikey", process.env.REACT_APP_NEWS_API_KEY);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  useEffect(() => {
    setArticles([]);
    setTotalResults(0);
    setPage(1);
    updateNews();
  }, [country, querry, category]);

  const updateNews = async () => {
    setLoading(true);

    let url = country
      ? `https://api.apilayer.com/world_news/search-news?source-countries=${country.code}&sort=publish-time&language=en&number=100`
      : `https://api.apilayer.com/world_news/search-news?text=${
          querry ? querry : props.querry
        }&sort=publish-time&number=${props.pageSize}&language=en`;

    try {
      let data = await fetch(url,requestOptions);
      if (data.status === 200) {
        let parsedData = await data.json();
        setArticles((prevArticles) => [
          ...prevArticles,
          ...parsedData.news,
        ]);
        setTotalResults(parsedData.available);
      } else {
        setError(data.status);
      }
    } catch (error) {
      console.error("Error fetching current news data:", error);
      setError(404);
    }
    setLoading(false);
  };

  const fetchMoreData = async () => {
    let url = country
      ? `https://api.apilayer.com/world_news/search-news?source-countries=${country.code}&sort=publish-time&language=en&number=100`
      : `https://api.apilayer.com/world_news/search-news?text=${
          querry ? querry : props.querry
        }&sort=publish-time&number=${props.pageSize}&language=en`;
    try {
      setPage((prevPage) => prevPage + 1);
      let data = await fetch(url,requestOptions);
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
          {articles &&
            articles.map((element, index) => (
              <div className="" key={index}>
                <NewsCard
                  title={element.title}
                  description={element.text}
                  imageUrl={element.image}
                  author={element.author}
                  date={element.publish_date}
                  newsUrl={element.url}
                />
              </div>
            ))}
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
