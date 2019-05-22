import React, { Component } from "react";

class User extends Component {
  render() {
    const user = this.props.user;
    let userStyle = "container border rounded-sm text-left user head ";
    userStyle += user.id % 2 === 0 ? "user-dark" : "user-lite";
    return (
      <div key={user.id} className={userStyle}>
        <div className="row">
          <div className="col-sm">
            <b>{user.name}</b>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">Id: {user.id}</div>
          <div className="col-sm">Name: {user.name}</div>
          <div className="col-sm">UserName: {user.username}</div>
          <div className="col-sm">Email:{user.email}</div>
          <div className="col-sm">Phone:{user.phone}</div>
          <div className="col-sm">Website: {user.website}</div>
        </div>
        <div className="row">
          <div className="col-sm">
            <b>Address</b>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm">City: {user.address.city}</div>
          <div className="col-sm">Street: {user.address.street}</div>
          <div className="col-sm">Suite: {user.address.suite}</div>
          <div className="col-sm">Zipcod:{user.address.zipcode}</div>
          <div className="col-sm">Geo Lat: {user.address.city}</div>
          <div className="col-sm">lng: {user.address.city}</div>
        </div>
        <div className="row">
          <div className="col-sm">
            <b>Geo: </b>
          </div>
          <div className="col-sm">Lat: {user.address.geo.lat}</div>
          <div className="col-sm">lng: {user.address.geo.lng}</div>
          <div className="col-sm" />
          <div className="col-sm" />
          <div className="col-sm" />
        </div>
        <div className="row">
          <div className="col-sm">
            <b>Company</b>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm">Name: {user.company.name}</div>
          <div className="col-sm">Catch Phrase: {user.company.catchPhrase}</div>
          <div className="col-sm">BS: {user.company.bs}</div>
          <div className="col-sm" />
          <div className="col-sm" />
        </div>
      </div>
    );
  }
}

export default User;
