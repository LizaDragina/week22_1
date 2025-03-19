import "./picture.css";

function picture(props) {
  return (
    <div className="Card-main_picture">
      <img src={props.imgLink} alt={props.title}></img>
    </div>
  );
}

export default picture;
