import React from "react";
import ReactDOM from "react-dom/client";

//normal browser scripts cannot have imports

{/* <div id="parent">
    <div id="child">
        <h1> i m h1 tag</h1>
    </div>
</div> */}

// const parent= React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("hi",{},"Im an h1 tag")
//     )
// );

{/* <div id="parent">
    <div id="child">
        <h1> i m h1 tag</h1>
        <h2? im h2 tag</h2>
    </div>
</div> */}
const parent= React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},[
        React.createElement("h1",{},"Im an h1 tag"),
    React.createElement("h2",{},"i m h2 tag"),]
    )
);

//jsx
const jsxheading= <h1 id="heading"> namaste react using jsx</h1>
//jsx is not html in js
//its html like or xml-like syntax
//jsx is just a syntax


// //React.createElement(
// 1st arg: what type of tag,
// 2nd arg:Object,
// 3rd arg :children(array when plural))
const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello worl from react");

console.log(parent);
console.log(heading);
//both are objects which are a react element, they become html when rendering in a browser but they arent html elements
// id xyz all these are attributes
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// root.render(heading);
//root render replaces all the content of div root
//other than root everythings just normal html
//why root coz we made root on the root id only const root=ReactDOM.createRoot(document.getElementById("root"));
//react is a library as it can work in a part of file , framework works on whole file but react can work on some part/small portion as well isliye lib not framework

//jsx makes react easy but without jsx also you xan do react

//dev dependency- in development phase only 
// normal dependency- required in production asw
//-D Means its a dev dependency npm install -D parcel  
//every dependency have their own package.json
//npx - executing package npx parcel xyz means execute this package
// we download react and react dom rather than fetching it from cdn links everytime (many ways we can use react)