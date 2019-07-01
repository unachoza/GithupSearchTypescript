import React, { Component } from "react";
import Form from "./Form";
import ResultsList from "./ResultsList";
import { fetchGithub } from "../API/Github";
import PulseLoader from "./LoadingBounce";
import "../App.css";
import { ErrorMessage } from "./Error";

export interface State {
  isLoaded: boolean;
  loading: boolean;
  data?: number[];
  fork: boolean;
  error: string;
  text: string;
  stargazers_count: string;
  license: string;
  name: string;
  owner: string;
  html_url: string;
  description: string;
}

interface Error {
  name: string;
  message: string;
  stack?: string;
}

class FormContainer extends Component<{}, State> {
  state = {
    isLoaded: false,
    loading: false,
    data: [],
    fork: false,
    error: "",
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
    let letters = /^[A-Za-z]+$/;
     inputtxt.match(letters) ? <ErrorMessage /> : ""
      // window.location.reload();
    if (inputtxt.match("-")) {
      const formatedInput = inputtxt.replace("-", "..");
      this.setState({ stargazers_count: formatedInput });
      console.log(formatedInput);
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

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    this.handleQuery(e);
    console.log(this.state);
  };
  loadingSpinner = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 750);
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
    const { isLoaded, data } = this.state;
    console.log("showing");
    return isLoaded && !data.length ? (
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
    const { loading, isLoaded } = this.state;
    return (
      <div className="content">
        <Form
          text={e => this.handleTextInput(e)}
          dropDown={e => this.handleDropDown(e)}
          toggleFork={() => this.toggleFork()}
          submit={e => this.handleSubmit(e)}
          loadingDots={() => this.loadingSpinner()}
          validateStarsInput={(inputtxt: string) =>
            this.validateStarsInput(inputtxt)
          }
          loading={loading}
        />
        {loading && <PulseLoader loading={loading} />}
        {isLoaded && !loading ? (
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
