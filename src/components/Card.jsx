import React from "react";
import Header from "./header";
import Main from "./main1";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <Header title={props.title} />
      <Main {...props} />
    </div>
  );
}

export default Card;
