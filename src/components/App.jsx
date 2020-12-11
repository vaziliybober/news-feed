import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './Home.jsx';
import Article from './Article.jsx';
import urls from '../urls.js';

const useNewsApi = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fetchMore = async () => {
    setLoading(true);
    setError('');
    try {
      const { data: { contents } } = await axios.get(urls.proxify(urls.news()));
      const data = JSON.parse(contents);
      setNews((prevNews) => prevNews.concat(data.articles));
      setError('');
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };
  return [news, fetchMore, { loading, error }];
};

const App = () => {
  const [news, fetchMore, { loading, error }] = useNewsApi();

  useEffect(() => {
    fetchMore();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home news={news} fetchMore={fetchMore} loading={loading} error={error} />
        </Route>
        <Route path="/:id">
          <Article />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
