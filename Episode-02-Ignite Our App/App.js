  import React from "react";
  import  ReactDOM  from "react-dom/client";
 /**
  * 
  *  <div id="parent">
  *   <div> id="child"
  *        <h1>I am an h1 tag</h1>
  *       <h2>I am an h2 tag</h2>
  *    </div>
  *  </div>
  * 
  * 
  * ReactElement(Object)=> HTML(Browser Understands)
  * 
  */ 

 const parent = React.createElement(
           "div",{id:"parent"},
         React.createElement(
            "div",{id:"child"},[
         React.createElement("h1",{},"I am an h1 tag"),
         React.createElement("h2",{},"I am an h2 tag")
        ]),
        React.createElement(
            "div",{id:"child2"},[
         React.createElement("h1",{},"I am an h1 tag"),
         React.createElement("h2",{},"I am an h2 tag")
        ])
 );

//JSX


// const heading = React.createElement(
//     "h1",
//    {id:"Heading",className:"xyz"},
//      "Hello world using React"
//     );

// console.log(heading); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);