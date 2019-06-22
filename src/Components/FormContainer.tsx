import React, { Component, MouseEvent } from "react";
import Form from "./Form";
import ResultsList from "./ResultsList";
import "../App.css";

export interface State {
  isLoaded: boolean;
  data?: number[];
  forked: boolean;
  error: string;
  text: string;
  stargazers_count: string;
  license: string;
  name: string;
  owner: string;
  html_url: string;
  description: string;
}

class FormContainer extends Component<{}, State> {
  state = {
    isLoaded: false,
    data: [],
    forked: false,
    error: "",
    text: "",
    stargazers_count: "",
    license: "",
    name: "",
    owner: "",
    html_url: "",
    description: ""
  };

  handleQuery = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    const { text, license, forked, stargazers_count } = this.state;
    if (text && license && stargazers_count) {
      await fetch(
        `https://api.github.com/search/repositories?q=${text}+license:${license}+stars:${stargazers_count}+fork:${forked}&sort=stars&order=desc`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            isLoaded: true,
            data: data.items,
            error: data.error
          });
        })
        .catch((errors: any) => {
          this.setState({ error: errors.message });
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
    this.setState({ stargazers_count: e.target.value });
  };
  validateStars = () => {};
  handleDropDown = (e: any): void => {
    this.setState({ license: e.target.value });
  };

  toggleFork = (e: MouseEvent): void => {
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
      <div>
        <hr />
        <p className="results-below-text">SEARCH Results</p>
        <h1 className="content">Your Search returned no results</h1>
      </div>
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
          text={(e) => this.handleTextInput(e)}
          stars={(e) => this.handleStarsInput(e)}
          dropDown={(e) => this.handleDropDown(e)}
          toggleFork={(e) => this.handleDropDown(e)}
          submit={(e) => this.handleSubmit(e)}
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
