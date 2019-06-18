import React, { Component } from "react";
import "../App.css";

interface State {
  isLoaded: boolean;
  data: number[];
  forked: boolean;
  error: string;
}

class FormContainer extends Component<{}, State> {
  state = {
    isLoaded: false,
    data: [],
    forked: false,
    error: ""
  };
  handleSubmit = (e: any): void => {
    console.log("submit clicked");
  };
  handleTextInput = (e: any): void => {
    console.log("text captured");
  };
  handleDropDown = (e: any): void => {
    console.log("dropped down");
  };
  handleStarsInput = (e: any): void => {
    console.log("stars captured");
  };
  toggleFork = (e: any): void => {
    console.log("toggle clicked");
  };

  render() {
    return (
      <div className="content">
        <form className="form" onSubmit={e => this.handleSubmit(e)}>
          <div className="column">
            Text
            <br />
            <input
              type="input"
              placeholder="Text"
              onChange={e => this.handleTextInput(e)}
            />
            <br />
            License
            <br />
            <select
              className="dropdown"
              name="license"
              onChange={e => this.handleDropDown(e)}
            >
              <option value="null" />
              <option value="MIT">MIT</option>
              <option value="ISC">ISC</option>
              <option value="apache-2.0">apache-2.0</option>
              <option value="gpl">gpl</option>
            </select>
          </div>
          <div className="column">
            Stars
            <br />
            <input
              type="input"
              placeholder="Stars"
              onChange={e => this.handleStarsInput(e)}
            />{" "}
            <br />
            <div id="fork">
              <input
                id="box"
                type="checkbox"
                onClick={e => this.toggleFork(e)}
              />
              <p id="checkbox-title">Include Forked</p>
            </div>
          </div>
          <input id="submit" type="submit" value="Search" />
        </form>
        <hr />
        <p className="results-below-text">
          Please enter query and click SEARCH button above, results appear here
        </p>
      </div>
    );
  }
}

export default FormContainer;
