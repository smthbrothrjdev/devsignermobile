import { useState } from 'react'
import './App.css'
import BadGrid from "./comps/BadGrid.tsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const [count, setCount] = useState(0)

  const LightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
<ThemeProvider theme={LightTheme}>
  <>
    <CssBaseline/>
      <div style={{  textAlign:'center' }}>
        <h1>MOBILE MAGIC</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <BadGrid />
  </>
</ThemeProvider>
  )
}

export default App
