import React from "react";

import { connect } from "react-redux";

const CharacterList = (props) => {
  console.log("characters", props.characters);
  return (
    <div className="container">
      <h5>Characters</h5>
      <ul>
        {props.characters.length > 0 ? (
          props.characters.map((item) => (
            <li key={item.id} className="characters_li character_style">
              {item.name}
              <span
                className="icon-style"
                onClick={() => props.addCharacter(item.id)}
              >
                <i className="fa-solid fa-plus"></i>
              </span>
            </li>
          ))
        ) : (
          <h6 style={{ color: "#28a745", fontWeight: "bold" }}>
            please add the characters
          </h6>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { characters } = state;
  return {
    characters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCharacter: (id) => dispatch({ type: "ADD_CHARACTER", payload: id })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
