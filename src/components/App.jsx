import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './Home.jsx';
import Article from './Article.jsx';

const App = () => {
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

      setNews(data.articles);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home news={news} />
        </Route>
        <Route path="/:id">
          <Article />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
