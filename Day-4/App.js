import React from "react";
import ReactDOM from "react-dom";

const jsxHeading = (
  <h1 className="head" id="heading">
    React using jsx
  </h1>
);

const HeadingComponentFunc = function () {
  return (
    <h1 className="head" id="heading">
      React using jsx
    </h1>
  );
};

// React Functional Component
const HeadingComponent = () => {
  return (
    <h1 className="head" id="heading">
      Welcome React
    </h1>
  );
};

const Title = () => <h1>Testing</h1>;

const title2 = <h1>Im ReactJS</h1>;

const HeadingComponent2 = () => (
  <div>
    {2 + 6}
    {title2}
    <Title />
    <h1 className="head" id="heading">
      React using jsx
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />); 