import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "../../client/Routes";

const requestHandler = (req, res) => {
  const component = renderToString(
    <StaticRouter location={req.url}>
      <AppRoutes />
    </StaticRouter>
  );

  const html = `
    <html>
      <head>
        <title>SSR React</title>
      </head>

      <body>
        <div id="root">${component}</div>

        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
};

export default requestHandler;
