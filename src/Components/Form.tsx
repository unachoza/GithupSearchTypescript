import "../App.css";

const Form = () => {
  <div className="content">
    <form className="form">
      <div className="column">
        Text
        <br />
        <input type="input" placeholder="Text" />
        <br />
        License
        <br />
        <select className="dropdown" name="license">
          <option value="null" />
          <option value="MIT">MIT</option>
          <option value="ISC">ISC</option>
          <option value="apache-2.0">apache-2.0</option>
          <option value="gpl">gpl</option>
        </select>
      </div>
      <div className="column">
        Stars
        <br />
        <input type="input" placeholder="Stars" /> <br />
        <div id="fork">
          <input id="box" type="checkbox" />
          <p id="checkbox-title">Include Forked</p>
        </div>
      </div>
      <input id="submit" type="submit" value="Search" />
    </form>
    <hr />
    <p className="results-below-text">
      Please enter query and click SEARCH button above, results appear here
    </p>
  </div>;
};
