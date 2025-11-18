import "./App.css";
import "./index.css";
import React, { useState } from "react";
import data from "./data.js";

import bg from "../public/assets/bg.png";
import logo from "../public/assets/logo1.png";
import shoes1 from "../public/assets/shoes1.jpg";
import shoes2 from "../public/assets/shoes2.jpg";
import shoes3 from "../public/assets/shoes3.jpg";

export default function App() {
  let [shoes] = useState(data);

  return (
    <div className="app">
      <header className="header">
        <a href="/" className="logo-wrap">
          <img src={logo} className="logo" />
          <p className="logo-text">deplois</p>
        </a>

        <nav className="nav">
          <a href="/" className="nav-item">
            Home
          </a>
          <a href="/about" className="nav-item">
            About
          </a>
          <a href="/contact" className="nav-item">
            Contact
          </a>
        </nav>
      </header>

      <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div>

      <main className="main">
        <div className="shoe-image-row">
          <div className="single-image">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
          </div>
          <div className="single-image">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
          </div>
          <div className="single-image">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
