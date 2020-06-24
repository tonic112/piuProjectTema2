import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Activitate extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.addActivity}
          >
            <FontAwesomeIcon
              style={{
                border: "0.5px solid #b30000",
                borderRadius: "20px"
              }}
              icon={faPlus}
            />
            <text style={{ width: "80%", color: "blue" }}>
              {" "}
              {"    Adaugă o activitate"}{" "}
            </text>
          </button>
        </li>
      </ul>
    );
  }
}

export default Activitate;
