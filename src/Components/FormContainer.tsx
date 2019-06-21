import React, { Component, SyntheticEvent } from "react";
import Form from "./Form";
import ResultsList from "./ResultsList";
// import { fetchGithub } from "../API/Github";
import "../App.css";
import { AnyNaptrRecord } from "dns";
import { string } from "prop-types";

export interface State {
  isLoaded: boolean;
  data: number[];
  forked: boolean;
  error: string;
  text: string;
  stars: string;
  license: string;
  name: string;
  owner: string;
  url: string;
  description: string;
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
    license: "",
    name: "",
    owner: "",
    url: "",
    description: ""
  };

  handleQuery = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    const { text, license, forked, stars } = this.state;
    if (text && license && stars) {
      await fetch(
        `https://api.github.com/search/repositories?q=${text}+license:${license}+stars:${stars}+fork:${forked}&sort=stars&order=desc`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ isLoaded: true, data: data.items });
        })

        .catch((error: string) => {
          this.setState({ error });
          console.log(this.state.error);
        });
      console.log(this.state);
    } else {
      console.log("no");
      alert("please fill all inputs");
    }
    this.showResults();
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

  //should I be able to use this function twice for license and text?
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

  // private show error
  private showError = (): JSX.Element => {
    return (
      <div>
        There was a problem: <br />
        {this.state.error}
      </div>
    );
  };

  showResults = (): JSX.Element => {
    return this.state.isLoaded && !this.state.data.length ? (
      <h1 className="content">Your Search returned no results</h1>
    ) : (
      <div>
        <hr />
        <p className="results-below-text">SEARCH Results</p>
        <ResultsList {...this.state} />
      </div>
    );
  };

  render() {
    //oneliner functino that looks clean
    return this.state.error ? (
      this.showError()
    ) : (
      <div className="content">
        <Form
          text={(e: any) => this.handleTextInput(e)}
          stars={(e: any) => this.handleStarsInput(e)}
          dropDown={(e: any) => this.handleDropDown(e)}
          toggleFork={(e: any) => this.handleDropDown(e)}
          submit={(e: any) => this.handleSubmit(e)}
        />
        {this.state.isLoaded ? (
          this.showResults()
        ) : (
          <div>
            <hr />
            <p className="results-below-text">
              Please enter query and click SEARCH button above, results appear
              here
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default FormContainer;
