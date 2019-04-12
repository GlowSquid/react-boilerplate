import "@babel/polyfill";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import bodyParser from "body-parser";
import { Helmet } from "react-helmet";

import App from "../client/src/App";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const context = {};
  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  const html = `
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
          ${helmet.title.toString()}
        </head>
        <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${markup}</div>
        <script src="client_bundle.js"></script>
        </body>
      </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  // console.error(`App running on ${PORT}`);
});
