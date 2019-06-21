import React from "react";
import ResultSingle from "./ResultSingle";
import "./Results.css";
import "../App.css";

export interface ResultsProps {
  text: string;
  data?: any;
  name: string;
  owner: string;
  url: string;
  description: string;
  stars: string;
  license: string;
}

const ResultsList = (props: ResultsProps) => {
  return (
    <div>
      {props.data.map((item: any) => (
        <ResultSingle everything={item} />
      ))}
    </div>
  );
};

export default ResultsList;
