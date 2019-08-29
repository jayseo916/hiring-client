import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  state = {
    user: false,
    url: ""
  };

  constructor() {
    super();
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          url: data.results[0].picture.large
        });
      });
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        {user ? (
          <div>
            <img src={this.state.url} />
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
          </div>
        ) : (
          <div>No Data</div>
        )}
        <Link to="/users" className="btn btn-primary">
          뒤로가기
        </Link>
        <Link to="/" className="btn btn-secondary m-2">
          HOME
        </Link>
      </div>
    );
  }
}

export default User;
