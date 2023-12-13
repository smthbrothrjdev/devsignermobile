import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import BadGrid from "./comps/BadGrid.tsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Button, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import AppyBar from "./comps/AppyBar.tsx";

const LightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "#C7C7C7",
  }
}});

function App() {

return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <AppyBar />
        <Box component="main" sx={{ flexGrow: 1,  textAlign: 'center', pl: 10}}  >
          <h1>Application Team Manager</h1>
          <BadGrid />
          <Stack sx={{ p: 3 }} spacing={2} direction={"row"}  justifyContent={"center"}>
            <Button variant="contained" color="secondary">PERSERVERE</Button>
            <Button variant="contained" color="success">PIVOT</Button>
            <Button variant="contained" color="error">DELETE</Button>
          </Stack>
        </Box>
    </ThemeProvider>
);
}

export default App
