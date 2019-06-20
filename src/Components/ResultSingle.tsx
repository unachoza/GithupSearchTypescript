import React from "react";
import { ResultsProps } from "./ResultsList";
import "./Results.css";

const ResultSingle = ({ everything }: { everything: any }) => {
  const {
    name,
    owner,
    html_url,
    description,
    stargazers_count,
    license
  } = everything;
  return (
    <div className="results-container">
      <div className="results-sub-container" id="text">
        <h2 className="repo-text">
          {" "}
          {name} Author: {owner.login}
        </h2>
        <p className="repo-description">{description}</p>
        <a href={html_url}>See on Github</a>
        <div id="fork">forked</div>
      </div>
      <div className="results-sub-container" id="star">
        <h6 className="text-title">Stars:</h6>
        <p className="text-answer">{stargazers_count}</p>
      </div>
      <div className="results-sub-container" id="license">
        <h6 className="text-title">License:</h6>
        <p className="text-answer">{license.name}</p>
      </div>
    </div>
  );
};
export default ResultSingle;
