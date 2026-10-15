import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App.jsx';

try {
  const html = ReactDOMServer.renderToString(React.createElement(App));
  console.log('App successfully rendered! Length of HTML:', html.length);
} catch (err) {
  console.error('RENDER ERROR CAUGHT:', err);
}
