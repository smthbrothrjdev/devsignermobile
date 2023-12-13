import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";

function AppyBar() {
  return (
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <Stack>
              <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                Product Office
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                Training Information System
              </Typography>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default AppyBar;
