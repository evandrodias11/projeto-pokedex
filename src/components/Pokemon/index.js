/* eslint-disable array-callback-return */
import React from "react";
import PropTypes from "prop-types";
import { handleGenerateBg } from "../../utils";

class Pokemon extends React.Component {
  render() {
    const typePokemon = handleGenerateBg(this.props.types[0]);

    return (
      <div
        className="pokemon"
        style={{ background: typePokemon, borderColor: typePokemon }}
      >
        <h2>{this.props.name}</h2>

        <img
          className="pokemon-image"
          src={
            this.props.photo ||
            "https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png"
          }
          alt={`pokemon ${this.props.name}`}
        />
        <ul className="pokemon-info">
          <li>
            <img
              alt="icon hp"
              src="https://img.icons8.com/color/15/000000/doctors-bag.png"
            />
            {"   "}
            {this.props.hp}
          </li>
          <li>
            <img
              alt="icon attack"
              src="https://img.icons8.com/color/15/000000/sword.png"
            />
            {"   "}
            {this.props.attack}
          </li>
          <li>
            <img
              alt="icon defense"
              src="https://img.icons8.com/color/15/000000/shield.png"
            />
            {"   "}
            {this.props.defense}
          </li>
        </ul>

        <div>
          {this.props.types.map((type) => {
            if (type === "Grass") {
              return (
                <img
                  alt="icon grass"
                  src="https://img.icons8.com/office/25/000000/grass.png"
                />
              );
            }
            if (type === "Fire") {
              return (
                <img
                  alt="icon fire"
                  src="https://img.icons8.com/emoji/25/000000/fire.png"
                />
              );
            }
            if (type === "Water") {
              return (
                <img
                  alt="icon water"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/25/000000/external-water-nature-resource-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
                />
              );
            }
            if (type === "Bug") {
              return (
                <img
                  alt="icon bug"
                  src="https://img.icons8.com/office/25/000000/bug.png"
                />
              );
            }
            if (type === "Flying") {
              return (
                <img
                  alt="icon flying"
                  src="https://img.icons8.com/emoji/25/000000/bird-emoji.png"
                />
              );
            }
            if (type === "Poison") {
              return (
                <img
                  alt="icon poison"
                  src="https://img.icons8.com/office/25/000000/poison-bottle.png"
                />
              );
            }
            if (type === "Electric") {
              return (
                <img
                  alt="icon electric"
                  src="https://img.icons8.com/fluency/25/000000/conflict.png"
                />
              );
            }
            if (type === "Ground") {
              return (
                <img
                  alt="icon ground"
                  src="https://img.icons8.com/color/25/000000/ground.png"
                />
              );
            }
            if (type === "Normal") {
              return (
                <img
                  alt="icon normal"
                  src="https://img.icons8.com/color/25/000000/pokeball--v1.png"
                />
              );
            }
            if (type === "Fairy") {
              return (
                <img
                  alt="icon fairy"
                  src="https://img.icons8.com/color/25/000000/wizard.png"
                />
              );
            }
            if (type === "Fighting") {
              return (
                <img
                  alt="icon figthing"
                  src="https://img.icons8.com/color/25/000000/boxing.png"
                />
              );
            }
            if (type === "Psychic") {
              return (
                <img
                  alt="icon psychic"
                  src="https://img.icons8.com/color/25/000000/crystal-ball.png"
                />
              );
            }
            if (type === "Steel") {
              return (
                <img
                  alt="icon steel"
                  src="https://img.icons8.com/color/25/000000/steel-bars.png"
                />
              );
            }
            if (type === "Ice") {
              return (
                <img
                  alt="icon steel"
                  src="https://img.icons8.com/color/25/000000/cooling.png"
                />
              );
            }
            if (type === "Rock") {
              return (
                <img
                  alt="icon rock"
                  src="https://img.icons8.com/color/25/000000/rock.png"
                />
              );
            }
            if (type === "Dragon") {
              return (
                <img
                  alt="icon dragon"
                  src="https://img.icons8.com/color/25/000000/the-dragon-team.png"
                />
              );
            }
            if (type === "Ghost") {
              return (
                <img
                  alt="icon ghost"
                  src="https://img.icons8.com/color/25/000000/ghost--v1.png"
                />
              );
            }
          })}
        </div>

        <div>{this.props.types.join(" / ")}</div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  hp: PropTypes.number,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string),
};

export default Pokemon;
