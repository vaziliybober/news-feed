import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './Home.jsx';
import Article from './Article.jsx';

const App = () => {
  const [news, setNews] = useState([]);
  const [fetching, setFetching] = useState(false);

  const fetchNews = async () => {
    setFetching(true);
    try {
      const { data: { contents } } = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent('https://newsapi.org/v2/top-headlines?country=ru&apiKey=5d4d5e4a3bec47d492e57abe7ed90ee4')}`);
      const data = JSON.parse(contents);
      console.log(data);

      setNews((prevNews) => prevNews.concat(data.articles));
    } catch (e) {
      console.log(e);
    }
    setFetching(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home news={news} fetchNews={fetchNews} fetching={fetching} />
        </Route>
        <Route path="/:id">
          <Article />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
