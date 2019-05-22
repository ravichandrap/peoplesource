import React, { Component } from "react";

class Head extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    lat: "",
    lng: "",
    companyName: "",
    bs: "",
    catchPhrase: ""
  };

  search = event => {
    const headJson = {
      name: this.state.name.trim(),
      username: this.state.username.trim(),
      email: this.state.email.trim(),
      phone: this.state.phone.trim(),
      website: this.state.website.trim(),
      street: this.state.street.trim(),
      suite: this.state.suite.trim(),
      city: this.state.city.trim(),
      zipcode: this.state.zipcode.trim(),
      lat: this.state.lat.trim(),
      lng: this.state.lng.trim(),
      companyName: this.state.companyName.trim(),
      bs: this.state.bs.trim(),
      catchPhrase: this.state.catchPhrase.trim()
    };
    this.props.peopleSearch(headJson);
    event.preventDefault();
  };

  render() {
    return (
      <div className="container head user">
        <div className="form-row">
          <div className="form-group">
            <label className="mr-2 col-form-label">Name</label>
            <input
              className="mr-2"
              type="text"
              name="name"
              value={this.state.name}
              onChange={v => {
                this.setState({ name: v.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label className="mr-2 col-form-label">User Name</label>
            <input
              className="mr-2"
              type="text"
              name="username"
              value={this.state.username}
              onChange={v => {
                this.setState({ username: v.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label className="mr-2 col-form-label">E-Mail</label>
            <input
              className="mr-2"
              type="text"
              name="email"
              value={this.state.email}
              onChange={v => {
                this.setState({ email: v.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label className="mr-2 col-form-label">Phone</label>
            <input
              className="mr-2"
              type="text"
              name="email"
              value={this.state.phone}
              onChange={v => {
                this.setState({ phone: v.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label className="mr-2 col-form-label">Wbsite</label>
            <input
              className="mr-2"
              type="text"
              name="email"
              value={this.state.website}
              onChange={v => {
                this.setState({ website: v.target.value });
              }}
            />
          </div>
        </div>
        <div className="row">
          <h4 className="mr-2">Address</h4>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="mr-2 col-form-label">Street</label>
            <input
              className="mr-2"
              type="text"
              name="street"
              value={this.state.street}
              onChange={v => {
                this.setState({ street: v.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label className="mr-2 col-form-label">Suite</label>
            <input
              className="mr-2"
              type="text"
              name="suite"
              value={this.state.suite}
              onChange={v => {
                this.setState({ suite: v.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label className="mr-2 col-form-label">city</label>
            <input
              className="mr-2"
              type="text"
              name="city"
              value={this.state.city}
              onChange={v => {
                this.setState({ city: v.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label className="mr-2 col-form-label">Zip Code</label>
            <input
              className="mr-2"
              type="text"
              name="zipcode"
              value={this.state.zipcode}
              onChange={v => {
                this.setState({ zipcode: v.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label className="mr-2 col-form-label">GEO</label>
            <input
              className="mr-2"
              type="text"
              name="lat"
              value={this.state.lat}
              onChange={v => {
                this.setState({ lat: v.target.value });
              }}
            />
            <input
              className="mr-2"
              type="text"
              name="lng"
              value={this.state.lng}
              onChange={v => {
                this.setState({ lng: v.target.value });
              }}
            />
          </div>
        </div>

        <div className="row">
          <h4 className="mr-2">Company</h4>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="mr-2 col-form-label">Name</label>
            <input
              className="mr-2"
              type="text"
              name="street"
              value={this.state.companyName}
              onChange={v => {
                this.setState({ companyName: v.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label className="mr-2 col-form-label">Catch Phrase</label>
            <input
              className="mr-2"
              type="text"
              name="suite"
              value={this.state.catchPhrase}
              onChange={v => {
                this.setState({ catchPhrase: v.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label className="mr-2 col-form-label">BS</label>
            <input
              className="mr-2"
              type="text"
              name="suite"
              value={this.state.bs}
              onChange={v => {
                this.setState({ bs: v.target.value });
              }}
            />
          </div>
        </div>
        <div className="row">
          <input
            type="button"
            className="btn btn-dark"
            value="Search"
            onClick={this.search}
          />
        </div>
      </div>
    );
  }
}

export default Head;
