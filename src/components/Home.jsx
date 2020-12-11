import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard.jsx';

export default (props) => {
  const { news, fetchNews, fetching } = props;
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop = (document.documentElement
      && document.documentElement.scrollTop)
      || document.body.scrollTop;

    const scrollHeight = (document.documentElement
      && document.documentElement.scrollHeight)
      || document.body.scrollHeight;

    if (scrollTop + window.innerHeight >= scrollHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  useEffect(() => {
    if (isBottom && !fetching) {
      fetchNews();
    }
  }, [isBottom]);

  // In this app such id is always unique
  /* eslint-disable react/no-array-index-key */
  return (
    <>
      <h1 className="header">News</h1>
      <div className="news">
        {news.map((n, i) => (
          <ArticleCard
            key={i}
            id={i}
            url={n.url}
            title={n.title}
            imageLink={n.urlToImage}
            preview={n.description}
            content={n.content}
          />
        ))}
      </div>
    </>
  );
  /* eslint-enable react/no-array-index-key */
};
