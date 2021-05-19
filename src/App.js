import React from "react";
import "./App.css";


import { gql, useQuery } from '@apollo/client'
import { StackedHorizontalBar } from '@shahlab/planetarium'

const QUERY = gql`
  query {
    foo {
      id
      name
      age
    }
  }
`;

const LABELS = ["small", "medium", "large"];
const DATA = {
  dog: { small: 50, medium: 25, large: 30 },
  cat: { small: 80, medium: 20, large: 0 },
  mouse: { small: 60, medium: 0, large: 10 },
};

const App = () => {

  const { loading, error, data } = useQuery(QUERY)
 
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
        <StackedHorizontalBar data={DATA} barLabels={LABELS} width={400} height={400} highlightedRow={null}/>
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
