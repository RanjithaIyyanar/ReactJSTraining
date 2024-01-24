const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {
        id: "heading"
    }, "I'm Heading 1"),
    React.createElement("h2", {
        id: "heading2"
    }, "I'm Heading 2")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.c4775257.js.map
