import React, { Component } from "react";
import Simbol from "./Simbol";

class Activitate extends Component {
  render() {
    const { nr, text, realizat } = this.props.deFacut;
    const bloc = {
      p5: {
        width: "6%",
        display: "inline-block",
        fontSize: "12px",
        fontWeight: "bold",
        textAlign: "center",
        border: "0.5px solid #c32000",
        borderRadius: "300px",
        backgroundColor: "#fb8080"
      },
      p70: {
        width: "70%",
        display: "inline-block",
        fontSize: "12px",
        fontWeight: "bold"
      },
      icon: {
        width: "5%",
        display: "inline-block",
        border: "0.5px solid #b30000",
        borderRadius: "390px"
      }
    };

    if (realizat === true) {
      bloc.p70.color = "#899";
    } else {
      bloc.p70.color = "#010";
    }

    return (
      <li class="list-group-item">
        <div className="d-flex justify-content-between">
          <div style={bloc.p5}>{nr}</div>
          <div style={bloc.p70}>{text}</div>
          <div style={bloc.icon}>
            <Simbol realiz={realizat} />
          </div>
        </div>
      </li>
    );
  }
}

export default Activitate;
