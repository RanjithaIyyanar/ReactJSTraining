import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Im Running the React File"),
    React.createElement("h2", { id: "heading2" }, "I'm Heading 2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);