import React, { Component } from "react";
import Activitate from "./Activitate.js";

class Activitati extends Component {
  render() {
    const lista = this.props.list.map(item => (
      <div className="r-flex justify-content-between" key={item.nr}>
        <Activitate deFacut={item} />
      </div>
    ));

    return lista;
  }
}

export default Activitati;
