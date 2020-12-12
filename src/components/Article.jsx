import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default () => {
  const {
    article: {
      url, title, urlToImage, content,
    },
  } = useLocation().state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="article">
      <img src={urlToImage} alt={title} />
      <div>
        <a href={url}><h2>{title}</h2></a>
        <p>{content}</p>
      </div>
    </div>
  );
};
