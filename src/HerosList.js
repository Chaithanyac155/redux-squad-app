import React from "react";

import { connect } from "react-redux";

const HeroList = (props) => {
  console.log("heros", props.heros);
  return (
    <div className="container">
      <h5>Heros</h5>
      <ul>
        {props.heros.length > 0 ? (
          props.heros.map((item) => (
            <li key={item.id} className="characters_li hero_style">
              {item.name}
              <span
                className="icon-style"
                onClick={() => props.removeCharacter(item.id)}
              >
                <i className="fa-solid fa-xmark"></i>
              </span>
            </li>
          ))
        ) : (
          <h6 style={{ color: "#28a745", fontWeight: "bold" }}>
            please add your heros
          </h6>
        )}
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeCharacter: (id) => dispatch({ type: "REMOVE_CHARACTER", payload: id })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
