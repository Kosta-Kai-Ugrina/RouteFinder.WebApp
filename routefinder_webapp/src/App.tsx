import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AddressInputForm, Map } from "./components";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h2" component="h1">
            Route Finder
          </Typography>
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <AddressInputForm />
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <Map />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
