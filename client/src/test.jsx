import React, { Component } from "react";
import axios from "axios";

export default class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: null,
    };
  }

  componentDidMount = () => {
    console.log("componentDidMount");
    axios
      .get("http://localhost:5000/monsters/")
      .then((result) => {
        console.log({ result });
        this.setState({ data: result.data });
      })
      .catch((e) => {
        console.error("ERROR >>> e.response", e.response);
        this.setState({ error: e.response });
      });
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        {" "}
        {data.map((m) => {
          return (
            <div key={m.name}>
              {m.name} - {m._id}
            </div>
          );
        })}{" "}
      </div>
    );
  }
}
