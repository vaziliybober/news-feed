import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import urls from '../urls.js';

const useExtractContent = (url) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fetchContent = async () => {
    setLoading(true);
    setError('');
    try {
      const { data: { contents } } = await axios.get(urls.proxify(url));
      setContent(
        contents
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/<[^>]*>?/gm, ''),
      );
      setError('');
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  return [content, fetchContent, { loading, error }];
};

export default () => {
  const {
    article: {
      url, title, urlToImage,
    },
  } = useLocation().state;

  const [content, fetchContent, { loading, error }] = useExtractContent(url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(async () => {
    fetchContent();
  }, []);

  return (
    <div className="article">
      <img src={urlToImage} alt={title} />
      <div>
        <a href={url}><h2>{title}</h2></a>
        <p>{loading ? 'Loading...' : content}</p>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};
