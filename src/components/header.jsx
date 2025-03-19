import React from "react";
import "./header.css";

function header({ title }) {
  return (
    <header className="Card-header">
      <h2 className="Card-header_title">{title}</h2>
    </header>
  );
}

export default header;
