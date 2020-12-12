import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = (props) => {
  const {
    id, article, article: {
      title, urlToImage, description,
    },
  } = props;

  return (
    <Link
      className="article-card"
      to={{
        pathname: `/${id}`,
        state: {
          article,
        },
      }}
    >
      <img src={urlToImage} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
