import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AddressInputForm, Map } from "./components";
import { AddressProvider } from "./context/AddressContext";

function App() {
  return (
    <AddressProvider>
      <Map>
        <AddressInputForm />
      </Map>
    </AddressProvider>
  );
}

export default App;
