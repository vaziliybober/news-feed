import React from 'react';

const Article = (props) => {
  const { title, imageLink, preview } = props;
  return (
    <div>
      <p>{title}</p>
      <img src={imageLink} alt={title} />
      <p>{preview}</p>
    </div>
  );
};

export default Article;
