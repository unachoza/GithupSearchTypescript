import React, { Component } from "react";
import Form from "./Form";
import ResultsList from "./ResultsList";
import { fetchGithub } from "../API/Github";
import { AwesomeComponent } from "./Loading";
import "../App.css";

export interface State {
  loading: boolean;
  isLoaded: boolean;
  data?: number[];
  fork: boolean;
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
    loading: false,
    isLoaded: false,
    data: [],
    fork: false,
    text: "",
    stargazers_count: "",
    license: "",
    name: "",
    owner: "",
    html_url: "",
    description: ""
  };

  handleTextInput = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
  };
  handleStarsInput = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ stargazers_count: e.currentTarget.value });
    this.validateStarsInput(e.currentTarget.value);
  };
  validateStarsInput = (inputtxt: string): void => {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.match(letters)) {
      alert(
        "The stars input is asking for a numerical query such as greater than, less than, exactly a value or a range of values"
      );
      window.location.reload();
    } else if (inputtxt.match("-")) {
      const formatedInput = inputtxt.replace("-", "..");
      this.setState({ stargazers_count: formatedInput });
      console.log(formatedInput);
    } else if (inputtxt.match(" - ")) {
      const formatedInput = inputtxt.replace(" - ", "..");
      this.setState({ stargazers_count: formatedInput });
      console.log(inputtxt, formatedInput);
    }
  };
  handleDropDown = (e: React.FormEvent<HTMLSelectElement>): void => {
    this.setState({ license: e.currentTarget.value });
  };

  toggleFork = (): void => {
    this.state.fork
      ? this.setState({ fork: false })
      : this.setState({ fork: true });
    console.log(this.state.fork);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.handleQuery(e);
  };
  spinner = () => {
    console.log("spinnning");
    return <AwesomeComponent loading={this.state.loading} />;
  };
  showLoading = (): JSX.Element => {
    console.log("hitting");
    this.setState({ loading: true });
    return this.state.loading ? (
      <AwesomeComponent loading={this.state.loading} />
    ) : (
      <h1>nope</h1>
    );
  };

  handleQuery = (e: React.FormEvent<HTMLFormElement>) => {
    const { text, license, fork, stargazers_count } = this.state;
    console.log(this.state);
    if (text && license && stargazers_count) {
      fetchGithub(text, license, fork, stargazers_count)
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
    return (
      <div>
        {this.state.loading ? this.showLoading() : this.showResults()}
        <div className="content">
          <Form
            loading={() => this.showLoading()}
            text={e => this.handleTextInput(e)}
            stars={e => this.handleStarsInput(e)}
            dropDown={e => this.handleDropDown(e)}
            toggleFork={() => this.toggleFork()}
            submit={e => this.handleSubmit(e)}
          />
          {this.state.isLoaded ? (
            setTimeout(() => {
              this.showResults();
            }, 400)
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
      </div>
    );
  }
}
export default FormContainer;
