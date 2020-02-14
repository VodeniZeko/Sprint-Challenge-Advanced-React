import React from "react";
import { Users } from "./components/Users";
import { Input } from "./components/Input";
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
      <div>
        <Input />
        <div className="wrapper">
          {this.state.players.map(player => {
            return <Users player={player} key={player.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
