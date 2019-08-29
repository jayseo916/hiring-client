import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "./user";

class users extends Component {
  state = {
    users: [],
    userId: 0
  };
  constructor() {
    super();
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(id) {
    this.setState({
      userId: id
    });
  }

  componentDidMount() {
    let that = this;
    fetch("/users")
      .then(res => res.json())
      .then(function(users) {
        that.setState({
          users
        });
      });
  }
  render() {
    let { id } = this.props.match.params;
    const { users } = this.state;
    let seluser = users.filter(user => user.id === id * 1);
    seluser = seluser[0];
    return (
      <div>
        {id === undefined ? (
          <React.Fragment>
            <table className="table">
              <thead>
                <tr>
                  <th>유저 리스트</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(user => (
                  <tr key={user.username}>
                    <td
                      type="button"
                      onClick={() => {
                        this.onSelect(user.id);
                      }}
                    >
                      {user.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <Link
                to={`/users/${this.state.userId}`}
                className="btn btn-primary"
              >
                선택
              </Link>
              <Link to="/" className="btn btn-primary m-3">
                뒤로가기
              </Link>
            </div>
            <Link to="/" className="btn btn-primary">
              Home
            </Link>
          </React.Fragment>
        ) : (
          <User user={seluser} />
        )}
      </div>
    );
  }
}

export default users;
