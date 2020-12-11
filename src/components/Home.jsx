import React from 'react';
import ArticleCard from './ArticleCard.jsx';

export default (props) => {
  const { news } = props;

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
