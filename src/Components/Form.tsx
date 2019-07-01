import React from "react";
import "../App.css";

interface FormProps extends React.Props<any> {
  text: (e: React.FormEvent<HTMLInputElement>) => void;
  dropDown: (e: React.FormEvent<HTMLSelectElement>) => void;
  toggleFork: () => void;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  loadingDots: () => void;
  validateStarsInput: (inputtxt: any) => void;
  loading: boolean
}

const Form = (props: FormProps) => {
  const { text, dropDown, toggleFork, submit, loadingDots, validateStarsInput, loading } = props;

  return (
    <div className="content">
      <form className="form" onSubmit={e => submit(e)} >
        <div className="column">
          <div>Text</div>
          <input
            type="input"
            placeholder="Text"
            onBlur={e => text(e)}
            disabled={loading}
          />
          <div>License</div>
          <select className="dropdown" name="license" onBlur={e => dropDown(e)} disabled={loading}>
            {["", "MIT", "ISC", "apache-2.0", "gpl"].map(choice => (
              <option value={choice}>{choice}</option>
            ))}
          </select>
        </div>
        <div className="column">
          <div>Stars</div>
          <input type="input" placeholder="Stars" onBlur={(inputtxt) => validateStarsInput(inputtxt)} disabled={loading} />
          <div id="fork">
            <input id="box" type="checkbox" onClick={() => toggleFork()} disabled={loading}/>
            <p id="checkbox-title">Include Forked</p>
          </div>
        </div>
        <input
          id="submit"
          type="submit"
          value="Search"
          onClick={loadingDots}
          
        />
      </form>
    </div>
  );
};

export default Form;
