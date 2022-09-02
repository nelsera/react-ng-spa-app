import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { updateResult } from "@example/utils";

export default function App({ name }) {
  return (
    <Router>
      <div>
        <p>{name} is mounted</p>
        <nav>
          <ul>
            <li>
              <Link to="/react-18-app-1">Home</Link>
            </li>
            <li>
              <Link to="/react-18-app-1/about">About</Link>
            </li>
            <li>
              <Link to="/react-18-app-1/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/react-18-app-1/about">
            <About />
          </Route>
          <Route path="/react-18-app-1/users">
            <Users />
          </Route>
          <Route path="/react-18-app-1">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const currentResult = localStorage.getItem("result");

  const [count, setCount] = useState(currentResult ? Number(currentResult) : 0);

  const handleCalc = (count, operator) => {
    const result = operator === "+" ? count + 1 : count - 1;

    setCount(result);

    localStorage.setItem("result", result);

    // updateResult(result)
  };

  return (
    <>
      <h2>Home</h2>
      <button onClick={() => handleCalc(count, "-")}>-</button>

      <span
        style={{ display: "inline-block", paddingLeft: 10, paddingRight: 10 }}
      >
        {count}
      </span>

      <button onClick={() => handleCalc(count, "+")}>+</button>
    </>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
