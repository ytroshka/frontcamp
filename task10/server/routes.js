import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom';
import App from '../dist/files/components/App';
import {createStore} from 'redux';
import {posts} from '../dist/files/reducers';

const store = createStore(posts);

const router = express.Router();

router.get('/', (req, res) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter>
        <App/>
      </StaticRouter>
    </Provider>
  );

  const template = `
  <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>React demo</title>
            <script defer src="bundle.js"></script>
        </head>
        <body>
            <div id="app">${content}</div>
        </body>
        </html>`;
  res.send(template);
});


export default router;