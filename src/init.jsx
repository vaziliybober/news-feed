import '../styles/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

export default () => {
  ReactDOM.render(
    <App>some text</App>,
    document.getElementById('react-root'),
  );
}