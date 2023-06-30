import React from "react";
import { hydrateRoot } from "react-dom/client";
import Home from "./components/Home";

const domNode = document.getElementById("root");
const root = hydrateRoot(domNode, <Home />);
