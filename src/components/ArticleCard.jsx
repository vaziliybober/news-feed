import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = (props) => {
  const {
    title, imageLink, preview, content, id, url,
  } = props;
  return (
    <Link
      className="article-card"
      to={{
        pathname: `/${id}`,
        state: {
          url,
          title,
          imageLink,
          content,
        },
      }}
    >
      <img src={imageLink} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{preview}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
