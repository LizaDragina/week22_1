import React from "react";
import "./main.css";

function main(props) {
  return (
    <main className="Card-main">
      <div className="Card-main_description">
        <ul className="Card-main_description__list">
          <li>Вселенная: {props.universe}</li>
          <li>Альтер эго: {props.alterego}</li>
          <li>Род деятельности: {props.occupation}</li>
          <li>Друзья: {props.friends}</li>
          <li>Суперсилы: {props.superpowers}</li>
        </ul>
      </div>
      <div className="Card-main_picture">
        <img src={props.imgLink} alt={props.title}></img>
      </div>
      <div className="Card-main_info">{props.info}</div>
    </main>
  );
}

export default main;
