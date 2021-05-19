import React from "react";
import logo from "./logo.svg";
import "./App.css";


import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
  query {
    foo {
      id
      name
      age
    }
  }
`;

const App = () => {

  const { loading, error, data } = useQuery(QUERY)
  console.log(loading, error, data)
  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  console.log(data.foo);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
