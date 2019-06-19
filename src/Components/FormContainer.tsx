import React, { Component, SyntheticEvent } from "react";
import Form from "./Form";
import ResultsList from "./ResultsList";
// import { fetchGithub } from "../API/Github";
import "../App.css";
import { AnyNaptrRecord } from "dns";

export interface State {
  isLoaded: boolean;
  data: number[];
  forked: boolean;
  error: string;
  text: string;
  stars: string;
  license: string;
}

//how to be an argument to handleinput
interface input {
  input: React.FormEvent<HTMLInputElement>;
}
interface ToggleProps {
  ClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

class FormContainer extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
  }

  state = {
    isLoaded: false,
    data: [],
    forked: false,
    error: "",
    text: "",
    stars: "",
    license: ""
  };

  handleQuery = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    const { text, license, forked, stars } = this.state;
    // if (text && license && forked && stars) {
    if (text) {
      await fetch(
        `https://api.github.com/search/repositories?q=${
          this.state.text
        }+license:mit+stars:>10+fork:true&sort=stars&order=desc`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ isLoaded: true, data: data.items });
        });
      console.log("hit", this.state);
    }
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    console.log("submit clicked", this.state);
    this.handleQuery(e);
  };

  handleTextInput = (e: any): void => {
    this.setState({ text: e.target.value });
  };
  handleStarsInput = (e: any): void => {
    this.setState({ stars: e.target.value });
  };

  // handleInput = (e: SyntheticEvent) => {
  //   console.log("was input");
  // };

  handleDropDown = (e: any): void => {
    this.setState({ license: e.target.value });
  };

  toggleFork = (e: any): void => {
    this.state.forked
      ? this.setState({ forked: false })
      : this.setState({ forked: true });
  };

  render() {
    if (this.state.error) {
      return (
        <div className="content">
          <h1>
            There was a problem: <br />
            {this.state.error}
          </h1>
        </div>
      );
    } else if (this.state.isLoaded && !this.state.data.length) {
      return <h1 className="content">Your Search returned no results</h1>;
    } else if (this.state.isLoaded) {
      return (
        <div>
          <Form
            text={(e: any) => this.handleTextInput(e)}
            stars={(e: any) => this.handleStarsInput(e)}
            dropDown={(e: any) => this.handleDropDown(e)}
            toggleFork={(e: any) => this.handleDropDown(e)}
          />
          <hr />
          <p className="results-below-text">SEARCH Results</p>
          <ResultsList {...this.state} /> {/*dataArr={this.state.data} */}
        </div>
      );
    }
    return (
      <div className="content">
        {/* <Form /> */}
        <form className="form" onSubmit={e => this.handleSubmit(e)}>
          <div className="column">
            Text
            <br />
            <input
              type="input"
              placeholder="Text"
              onChange={e => this.setState({ text: e.target.value })}
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
              onChange={e => this.setState({ stars: e.target.value })}
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
