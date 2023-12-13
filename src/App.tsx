import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import BadGrid from "./comps/BadGrid.tsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Sidebar from "./comps/Sidebar.tsx";
import {Button, Stack} from "@mui/material";


function App() {

  const LightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
<ThemeProvider theme={LightTheme}>

    <CssBaseline />
    <Sidebar />
      <div style={{  textAlign:'center' }}>
        <h1>Application Team Manager</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <BadGrid />
  <Stack sx={{p:3}} spacing={2} direction={"row"} justifyContent="flex-end" >
  <Button variant="contained" color="secondary"> PERSERVERE</Button>
  <Button variant="contained" color="success"> PIVOT</Button>
  <Button variant="contained" color={"error"}> DELETE </Button>
  </Stack>
</ThemeProvider>
  )
}

export default App
