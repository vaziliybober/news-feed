import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article.jsx';

export default () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const { data } = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'ru',
          apiKey: '15aabf9f876c4032985fa37bc5f8cddf',
        },
      });

      if (data.status !== 'ok') {
        throw new Error('News status not ok');
      }

      console.log(data);
      setNews(data.articles);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // In this app such id is always unique
  /* eslint-disable react/no-array-index-key */
  return (
    <>
      <h1 className="header">News</h1>
      <div className="news">
        {news.map((n, i) => (
          <Article
            key={i}
            title={n.title}
            imageLink={n.urlToImage}
            preview={n.description}
          />
        ))}
      </div>
    </>
  );
  /* eslint-enable react/no-array-index-key */
};
