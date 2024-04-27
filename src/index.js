import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
const number = 3;

ReactDom.render(
  <div>
    <h1 className="heading">Prabhakar Singh</h1>
    <p>Your Lucky Number is: {number}</p>
    <img
      className="img"
      src="https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_640.jpg"
      alt=""
    />
    <img
      className="img"
      src="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
  </div>,

  document.getElementById("root"),
);
