import React, { Component } from "react";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

class Simbol extends Component {
  render() {
    const { realiz } = this.props;

    if (realiz === true) {
      return <FontAwesomeIcon icon={faCheck} />;
    } else {
      return <FontAwesomeIcon icon={faQuestion} />;
    }
  }
}

export default Simbol;
