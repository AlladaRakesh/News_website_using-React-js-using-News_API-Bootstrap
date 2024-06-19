import React, { useEffect, useState } from 'react';
import Newsitems from './Newsitems';

function News({category}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center mb-4 mt-3">LATEST <span className="badge bg-danger">NEWS</span></h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        {articles.map((news, index) => (
          <Newsitems
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
