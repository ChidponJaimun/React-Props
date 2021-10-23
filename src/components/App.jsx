import React from "react";

function App(props) {
  return (
    <div className="myStyle">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
      <p>{props.joe}</p>
    </div>
  );
}

export default App;
