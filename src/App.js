import "./App.css";

function Card(props) {
  return (
    <div className="Card">
      <header className="Card-header">
        <h2 className="Card-header_title">{props.title}</h2>
      </header>
      <main className="Card-main">
        <div className="Card-main_description">
          <ul className="Card-main_description__list">
            <li className="Card-main_description__list-obj">
              Вселенная: {props.universe}
            </li>
            <li className="Card-main_description__list-obj">
              Альтер эго: {props.alterego}
            </li>
            <li className="Card-main_description__list-obj">
              Род деятельности: {props.occupation}
            </li>
            <li className="Card-main_description__list-obj">
              Друзья: {props.friends}
            </li>
            <li className="Card-main_description__list-obj">
              Суперсилы: {props.superpowers}
            </li>
          </ul>
        </div>
        <div className="Card-main_photo">
          <img src={props.imgLink} alt={props.title}></img>
        </div>
        <div className="Card-main_info">{props.info}</div>
      </main>
    </div>
  );
}

export default Card;
