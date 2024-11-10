import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Test for auto-deploy</p>
        <p>Bok Iro</p>
        <Box>
          <Typography variant="h1">Domo arigato Mr. Roboto</Typography>
        </Box>
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
}

export default App;
