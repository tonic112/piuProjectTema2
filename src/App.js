import React, { Component } from "react";
import Activitati from "./Activitati";
import Adaug from "./Adaug";

class App extends Component {
  myFunction = () => {
    console.log("Logam activitatile");
  };
  render() {
    let list_activitati = [
      { nr: 1, text: "Primul client", realizat: false },
      { nr: 2, text: "Al doilea client", realizat: true },
      { nr: 3, text: "Inca unul si am plecat", realizat: false }
    ];

    return (
      <div className="App" style={{ padding: "20px" }}>
        <h1 style={{ textAlign: "center", color: "#333" }}>
          {" "}
          Lista de activități{" "}
        </h1>
        <Activitati list={list_activitati} />
        <Adaug addActivity={this.myFunction} />
      </div>
    );
  }
}
export default App;
