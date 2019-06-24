import React from "react";
import ResultSingle from "./ResultSingle";
import "./Results.css";
import "../App.css";

export interface ResultsProps {
  text: string;
  data?: any;
}
export interface RepoItems {
  name: string;
  owner: { login: string };
  html_url: string;
  description: string;
  stargazers_count: number;
  license: { name: string };
  forked: boolean
}

const ResultsList = (props: ResultsProps): JSX.Element => (
  <div>
    {props.data.map((item: RepoItems) => (
      <ResultSingle everything={item} />
    ))}
  </div>
);

export default ResultsList;
