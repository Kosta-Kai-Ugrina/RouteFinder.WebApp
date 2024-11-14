import { Button, Stack } from "@mui/material";
import React from "react";
import {
  testConnection,
  testOptimizeWrongRoute1,
  testOptimizeWrongRoute2,
} from "../../../api/routeFinderApi";

export const TestButtons = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        onClick={() => {
          testConnection().then(console.log);
        }}
      >
        Test Connection
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          testOptimizeWrongRoute1().then(console.log);
        }}
      >
        Test 1
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          testOptimizeWrongRoute2().then(console.log);
        }}
      >
        Test 2
      </Button>
    </Stack>
  );
};
