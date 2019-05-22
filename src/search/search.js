import React, { Component } from "react";
import Head from "./head/head";
import User from "./body/user";
import Defaultresult from "./defaultresult";

class Search extends Component {
  state = { users: [], error: "", isLoadded: false };

  compareUser = (user, searchUser) => {
    console.log(user);
    if (searchUser.name !== "" && user.name.indexOf(searchUser.name) !== -1) {
      return true;
    } else if (
      searchUser.username !== "" &&
      user.username === searchUser.username
    ) {
      return true;
    } else if (searchUser.email !== "" && searchUser.email === user.email) {
      return true;
    } else if (searchUser.phone !== "" && searchUser.phone === user.phone) {
      return true;
    } else if (
      searchUser.website !== "" &&
      searchUser.website === user.website
    ) {
      return true;
    } else if (
      searchUser.street !== "" &&
      user.address.street.indexOf(searchUser.street) !== -1
    ) {
      return true;
    } else if (
      searchUser.suite !== "" &&
      user.address.suite.indexOf(searchUser.suite) !== -1
    ) {
      return true;
    } else if (
      searchUser.city !== "" &&
      user.address.city.indexOf(searchUser.city) !== -1
    ) {
      return true;
    } else if (
      searchUser.zipcode !== "" &&
      searchUser.zipcode === user.address.zipcode
    ) {
      return true;
    } else if (
      searchUser.lat !== "" &&
      searchUser.lat === user.address.geo.lat &&
      searchUser.lng !== "" &&
      searchUser.lng === user.address.geo.lng
    ) {
      return true;
    } else if (
      searchUser.companyName !== "" &&
      user.company.name.indexOf(searchUser.companyName) !== -1
    ) {
      return true;
    } else if (
      searchUser.catchPhrase !== "" &&
      user.company.catchPhrase.indexOf(searchUser.catchPhrase) !== -1
    ) {
      return true;
    } else if (
      searchUser.bs !== "" &&
      user.company.bs.indexOf(searchUser.bs) !== -1
    ) {
      return true;
    }
  };

  findUsers = searchUser => {
    const localUsers = [...this.state.users];
    let users = [];
    localUsers.forEach(user => {
      if (this.compareUser(user, searchUser)) {
        users.push(user);
      }
    });
    console.log("users: ", users);
    this.setState({ users });
  };

  peopleSearch = searchUser => {
    this.findUsers(searchUser);
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        data => {
          this.setState({ users: data, isLoadded: true });
        },
        error => {
          this.setState({ error });
        }
      );
  }

  render() {
    const { users } = this.state;
    console.log("users length: ", this.state.users.length);
    return (
      <div>
        <div className="row border head head-left">
          <Head peopleSearch={this.peopleSearch} />
        </div>
        <div className="row border head-left">
          {this.state.users.length === 0 ? (
            <Defaultresult />
          ) : (
            users.map((user, index) => <User user={user} key={index} />)
          )}
        </div>
      </div>
    );
  }
}

export default Search;
