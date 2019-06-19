import React, { Component } from "react";
import "../App.css";

interface FormProps extends React.Props<any> {
  text: (e: any) => void;
  stars: (e: any) => void;
  dropDown: (e: any) => void;
  toggleFork: (e: any) => void;
}

class Form extends Component<FormProps> {
  render() {
    return (
      <div className="content">
        <form className="form">
          <div className="column">
            Text
            <br />
            <input
              type="input"
              placeholder="Text"
              required
              onChange={e => this.props.text(e)}
            />
            <br />
            License
            <br />
            <select
              className="dropdown"
              name="license"
              onChange={e => this.props.dropDown(e)}
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
              onChange={e => this.props.stars(e)}
            />{" "}
            <br />
            <div id="fork">
              <input
                id="box"
                type="checkbox"
                onClick={e => this.props.toggleFork(e)}
              />
              <p id="checkbox-title">Include Forked</p>
            </div>
          </div>
          <input id="submit" type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Form;
