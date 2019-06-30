import React from "react";
import { State } from "./FormContainer";
import "../App.css";

interface FormProps extends React.Props<any> {
  text: (e: React.FormEvent<HTMLInputElement>) => void;
  stars: (e: React.FormEvent<HTMLInputElement>) => void;
  dropDown: (e: React.FormEvent<HTMLSelectElement>) => void;
  toggleFork: () => void;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  loadingDots: () => void;
  loading: boolean
}

const Form = (props: FormProps) => {
  const { text, stars, dropDown, toggleFork, submit, loadingDots, loading } = props;

  return (
    <div className="content">
      <form className="form" onSubmit={e => submit(e)}>
        <div className="column">
          <div>Text</div>
          <input
            type="input"
            placeholder="Text"
            required
            onBlur={e => text(e)}
          />
          <div>License</div>
          <select className="dropdown" name="license" onBlur={e => dropDown(e)}>
            {["", "MIT", "ISC", "apache-2.0", "gpl"].map(choice => (
              <option value={choice}>{choice}</option>
            ))}
          </select>
        </div>
        <div className="column">
          <div>Stars</div>
          <input type="input" placeholder="Stars" onBlur={e => stars(e)} />{" "}
          <div id="fork">
            <input id="box" type="checkbox" onClick={() => toggleFork()} />
            <p id="checkbox-title">Include Forked</p>
          </div>
        </div>
        <input
          id="submit"
          type="submit"
          value="Search"
          onClick={loadingDots}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default Form;
