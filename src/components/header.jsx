import React from "react";
import "./header.css";

function header(props) {
  return (
    <header className="Card-header">
      <h2 className="Card-header_title">{props.title}</h2>
    </header>
  );
}

export default header;
