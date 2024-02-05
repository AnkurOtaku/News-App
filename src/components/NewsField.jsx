import React, { useEffect, useState, useContext, useMemo } from "react";
import { AppContext } from "../store/store";
import Loading from "./Loading";
import NewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchNews = async (
  setLoading,
  page,
  setPage,
  querry,
  category,
  country,
  pageSize,
  requestOptions,
  setArticles,
  setTotalResults,
  setError
) => {
  let url = `https://api.apilayer.com/world_news/search-news?text=${
    querry ? querry : category
  }&${country ? `source-countries=${country.code}&` : ""}number=${
    pageSize
  }&offset=${pageSize * page}&sort=publish-time&language=en&sort-direction=desc`;

  try {
    page === 0 && setLoading(true);
    let data = await fetch(url, requestOptions);
    if (data.status === 200) {
      let parsedData = await data.json();
      setArticles((prevArticles) => [...prevArticles, ...parsedData.news]);
      setTotalResults(parsedData.available);
      page === 0 && setLoading(false);
      setPage((prevPage) => prevPage + 1);
    } else {
      page === 0 && setLoading(false);
      setError(data.status);
    }
  } catch (error) {
    console.error("Error fetching current news data:", error);
    setError(524);
    page === 0 && setLoading(false);
  }
};

const NewsField = () => {
  const pageSize = 12;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const { country, querry, category, setError } = useContext(AppContext);

  const requestOptions = useMemo(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", process.env.REACT_APP_NEWS_API_KEY);

    return {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
  }, []);

  useEffect(() => {
    setArticles([]);
    setError(false);
    setTotalResults(0);
    setPage(0);

    fetchNews(
      setLoading,
      0,
      setPage,
      querry,
      category,
      country,
      pageSize,
      requestOptions,
      setArticles,
      setTotalResults,
      setError
    );
  }, [country, querry, category, pageSize, requestOptions]);

  return (
    <div className="py-4">
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={articles.length}
        next={() =>
          fetchNews(
            setLoading,
            page + 1,
            setPage,
            querry,
            category,
            country,
            pageSize,
            requestOptions,
            setArticles,
            setTotalResults,
            setError
          )
        }
        hasMore={articles.length < 100 && totalResults > 0}
        loader={<Loading />}
      >
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-2">
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
      {!loading && totalResults===0 && <div className="text-center">-- No more news to be found --</div>}
    </div>
  );
};

export default NewsField;
