import React, { Component } from "react";
import { State } from "./FormContainer";
import ResultSingle from "./ResultSingle";
import "./Results.css";
import "../App.css";

export interface ResultsProps {
  text: any;
  data: any;
  name: string;
  owner: string;
  url: string;
  description: string;
  stars: string;
  license: string;
}

class ResultsList extends Component<ResultsProps> {
  constructor(props: ResultsProps) {
    super(props);
  }
  render(): JSX.Element {
    const mapping = this.props.data.map((item: any) => {
      return <ResultSingle everything={item} />;
    });
    console.log(this.props.data);

    return (
      <div>
        {mapping}
      </div>
    );
  }
}

export default ResultsList;
