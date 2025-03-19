import React from "react";
import "./main.css";

function main({
  universe,
  alterego,
  occupation,
  friends,
  superpowers,
  imgLink,
  info,
  title,
}) {
  return (
    <main className="Card-main">
      <div className="Card-main_description">
        <ul className="Card-main_description__list">
          <li>Вселенная: {universe}</li>
          <li>Альтер эго: {alterego}</li>
          <li>Род деятельности: {occupation}</li>
          <li>Друзья: {friends}</li>
          <li>Суперсилы: {superpowers}</li>
        </ul>
      </div>
      <div className="Card-main_picture">
        <img src={imgLink} alt={title}></img>
      </div>
      <div className="Card-main_info">{info}</div>
    </main>
  );
}

export default main;
