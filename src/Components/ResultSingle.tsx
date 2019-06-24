import React from "react";
import "./Results.css";
import { RepoItems } from "./ResultsList";

const ResultSingle = ({ everything }: { everything: RepoItems }): JSX.Element => {
  const {
    name,
    owner,
    html_url,
    description,
    stargazers_count,
    license,
    forked
  } = everything;
  const forkCheck = () => {
    console.log('im trying')
    if (forked){
      return <div id="fork-button">forked</div>
    }
  }
  return (
    <div className="result-container">
      <div className="results-sub-container" id="text">
        <h2 className="repo-text">
          {name} Author: {owner.login}
        </h2>
        <p className="repo-description">{description}</p>
        <a href={html_url}>See on Github</a>
        {forkCheck()}
        {/* <div id="fork-button">forked</div> */}
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
