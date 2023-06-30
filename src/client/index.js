import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

const domNode = document.getElementById("root");
hydrateRoot(
  domNode,
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
