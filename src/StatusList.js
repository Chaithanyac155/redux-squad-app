import React from "react";
import { connect } from "react-redux";

const StatusList = (props) => {
  console.log("status", props.heros);

  function strength() {
    let strength = 0;
    props.heros.forEach((hero) => (strength += hero.strength));
    return strength;
  }

  function intelligence() {
    let strength = 0;
    props.heros.forEach((hero) => (strength += hero.intelligence));
    return strength;
  }

  function speed() {
    let strength = 0;
    props.heros.forEach((hero) => (strength += hero.speed));
    return strength;
  }

  return (
    <div className="container">
      <h5>Status</h5>
      <ul>
        <li className="characters_li status_li">
          Overall Strength :
          <span class="badge badge-light" style={{ fontSize: "1rem" }}>
            {strength()}
          </span>
        </li>
        <li className="characters_li status_li">
          Overall Intelligence :
          <span className="badge badge-light" style={{ fontSize: "1rem" }}>
            {intelligence()}
          </span>
        </li>
        <li className="characters_li status_li">
          Overall Speed :
          <span className="badge badge-light" style={{ fontSize: "1rem" }}>
            {speed()}
          </span>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { heros } = state;
  return {
    heros
  };
};
export default connect(mapStateToProps, null)(StatusList);
