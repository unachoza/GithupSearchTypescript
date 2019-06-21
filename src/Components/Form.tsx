import React from "react";
import "../App.css";

interface FormProps extends React.Props<any> {
  text: (e: any) => void;
  stars: (e: any) => void;
  dropDown: (e: any) => void;
  toggleFork: (e: any) => void;
  submit: (e: any) => void;
}

const Form = (props: FormProps) => {
  return (
    <div className="content">
      <form className="form" onSubmit={e => props.submit(e)}>
        <div className="column">
          Text
          <br />
          <input
            type="input"
            placeholder="Text"
            required
            onChange={e => props.text(e)}
          />
          <br />
          License
          <br />
          <select
            className="dropdown"
            name="license"
            onChange={e => props.dropDown(e)}
          >
            {["", "MIT", "ISC", "apache-2.0", "gpl"].map(choice => (
              <option value={choice}>{choice}</option>
            ))}
          </select>
        </div>
        <div className="column">
          Stars
          <br />
          <input
            type="input"
            placeholder="Stars"
            onChange={e => props.stars(e)}
          />{" "}
          <br />
          <div id="fork">
            <input
              id="box"
              type="checkbox"
              onClick={e => props.toggleFork(e)}
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
