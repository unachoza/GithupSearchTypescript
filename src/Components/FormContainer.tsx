import React, { Component, MouseEvent } from "react";
import Form from "./Form";
import ResultsList from "./ResultsList";
import { fetchGithub } from "../API/Github";
import "../App.css";

export interface FormState {
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

class FormContainer extends Component<{}, FormState> {
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

  validateStarsInput = (inputtxt: string): void => {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.match(letters)) {
      alert(
        "The stars input is asking for a query such as greater than, less than, exactly a value or a range of values"
      );
      window.location.reload();
    }
  };

  handleQuery = (e: React.FormEvent<HTMLFormElement>) => {
    const { text, license, forked, stargazers_count } = this.state;
    if (text && license && stargazers_count) {
      fetchGithub(text, license, forked, stargazers_count)
        .then(res => res.json())
        .then(data => {
          this.setState({
            isLoaded: true,
            data: data.items
          });
        });
    } else {
      alert("please fill all query inputs");
    }
    this.showResults();
    
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    this.validateStarsInput(this.state.stargazers_count);
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

  

  render() {
    return this.state.error ? (
      this.showError()
    ) : (
      <div className="content">
        <Form
          text={e => this.handleTextInput(e)}
          stars={e => this.handleStarsInput(e)}
          dropDown={e => this.handleDropDown(e)}
          toggleFork={e => this.toggleFork(e)}
          submit={e => this.handleSubmit(e)}
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
