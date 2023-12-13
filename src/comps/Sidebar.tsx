import {Drawer, List, ListItem, ListItemText, ListItemButton, Box, Typography, Stack} from '@mui/material';

const drawerWidth = 240;

const Sidebar = () => {
  return (
      <Box
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              p: 1,
              backgroundColor: 'grey.200'
            },
          }}
      >
        <Drawer
            variant="permanent"
            anchor="left"
            open
        >
          <Typography variant='h5'> Product Office Training Information System (POTIS)</Typography>
          <Stack sx={{p:6}}> </Stack>
          <Typography variant='h6'> Applications </Typography>

          <List >
            <ListItem key="Application1" >
              <ListItemButton>
                <ListItemText primary="App Manager" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Application3" >
              <ListItemButton>
                <ListItemText primary="Secret Suace Maker" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Application3" >
              <ListItemButton>
                <ListItemText primary="Ideation Ideas" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Application4" >
              <ListItemButton>
                <ListItemText primary="APPLICATION PURGATORY" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
  );
};

export default Sidebar;
