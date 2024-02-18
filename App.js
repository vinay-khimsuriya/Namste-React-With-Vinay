// const heading=React.createElement("h1",{},"Hello");
const heading=React.createElement("h1",{class:"heading"},"Hello printed using REACT");
const root=ReactDOM.createRoot(document.getElementById("root"));
// const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);

const parent=React.createElement("div",{class:"parent"},
React.createElement("div",{class:"child"},
React.createElement("h1",{},"I am H1 Tag")));

console.log(parent);

root.render(parent);

