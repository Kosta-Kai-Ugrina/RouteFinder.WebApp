import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AddressInputForm, Map } from "./components";
import { AppContextProvider } from "./context/AppContext";

function App() {
  const a = 1;
  return (
    <AppContextProvider>
      <Map>
        <AddressInputForm />
      </Map>
    </AppContextProvider>
  );
}

export default App;
