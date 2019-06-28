import React from "react";
import "../App.css";

interface FormProps extends React.Props<any> {
  text: (e: React.FormEvent<HTMLInputElement>) => void;
  stars: (e: React.FormEvent<HTMLInputElement>) => void;
  dropDown: (e: React.FormEvent<HTMLSelectElement>) => void;
  toggleFork: () => void;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = (props: FormProps) => {
  return (
    <div className="content">
      <form className="form" onSubmit={e => props.submit(e)}>
        <div className="column">
          <div>Text</div>
          <input
            type="input"
            placeholder="Text"
            required
            onBlur={e => props.text(e)}
          />
          <div>License</div>
          <select
            className="dropdown"
            name="license"
            onBlur={e => props.dropDown(e)}
          >
            {["", "MIT", "ISC", "apache-2.0", "gpl"].map(choice => (
              <option value={choice}>{choice}</option>
            ))}
          </select>
        </div>
        <div className="column">
          <div>Stars</div>
          <input
            type="input"
            placeholder="Stars"
            onBlur={e => props.stars(e)}
          />{" "}
          <div id="fork">
            <input
              id="box"
              type="checkbox"
              onClick={() => props.toggleFork()}
            />
            <p id="checkbox-title">Include Forked</p>
          </div>
        </div>
        <input id="submit" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Form;
