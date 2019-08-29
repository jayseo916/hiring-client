import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  toUsers() {}

  render() {
    return (
      <div>
        <h2>어플리케이션 선택</h2>
        <div>
          <Link to="/users" className="btn-primary btn-lg m-4">
            투두
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
