import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <App
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="0846452769"
      email="chidpon@mail.com"
      joe="152"
    />

    <App
      name="Baifern"
      img="https://www.newtv.co.th/images/content/ct_20191222110628311.jpg"
      tel="0923718898"
      email="fern@mail.com"
      joe="155"
    />
  </div>,
  document.getElementById("root")
);
