import { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
function NewsList({ category }) {
  const [articles, SetArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        ` https://newsapi.org/v2/everything?q=${category}&apiKey=64c7a1943bcf449e9e10ab5c22a5df6d`
      );
      SetArticles(response.data.articles);
      console.log(response);
    };
    getArticles();
  }, [category]);

  return (
    <>
      <h2
        className="text-center"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        LATEST{" "}
        <span
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "8px",
            padding: "5px 10px",
          }}
        >
          NEWS
        </span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </>
  );
}

export default NewsList;
