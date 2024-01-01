import { Component } from "react";
import "./card.styles.css";
class Card extends Component {
  render() {
    const monster = this.props.monster;
    const { id, name, email } = monster;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
