import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import BadGrid from "./comps/BadGrid.tsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Button, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Sidebar from "./comps/Sidebar.tsx";

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
      <Box sx={{ display: 'flex'}}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1,  textAlign: 'center', pl: 10}}  >
          <h2>Application Team Manager</h2>
          <BadGrid />
          <Stack sx={{ p: 3 }} spacing={2} direction={"row"} justifyContent="flex-end">
            <Button variant="contained" color="secondary">PERSERVERE</Button>
            <Button variant="contained" color="success">PIVOT</Button>
            <Button variant="contained" color="error">DELETE</Button>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
);
}

export default App
