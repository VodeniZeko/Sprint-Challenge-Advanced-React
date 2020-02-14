import React from "react";
import { Users } from "./components/Users";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({
          players: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {this.state.players.map(player => {
          return <Users player={player} key={player.name} />;
        })}
      </div>
    );
  }
}

export default App;
