import express from "express";
import React from "react";
import Home from "../client/components/Home";
import { renderToString } from "react-dom/server";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  const content = renderToString(<Home />);

  const html = `
    <html>
      <head>
        <title>SSR React</title>
      </head>

      <body>
        <div id="root">${content}</div>

        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log(`App is running on port ${3000}`);
});
