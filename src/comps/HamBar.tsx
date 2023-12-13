import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AirlineSeatFlatAngledIcon from '@mui/icons-material/AirlineSeatFlatAngled';

const HamBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const list = () => (
      <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
      >
        <List>

            <ListItem button key={'App Manager'}>
              <ListItemIcon><AppsIcon /></ListItemIcon>
              <ListItemText primary={'App Manager'} />
            </ListItem>
        <ListItem button key={"Secret Suace Maker"}>
              <ListItemIcon><SanitizerIcon/></ListItemIcon>
              <ListItemText primary={"Secret Suace Maker"} />
            </ListItem>
        <ListItem button key={"Ideation Ideas"}>
              <ListItemIcon><TipsAndUpdatesIcon /></ListItemIcon>
              <ListItemText primary={"Ideation Ideas"} />
            </ListItem>
        <ListItem button key={"APPLICATION PURGATORY"}>
              <ListItemIcon><AirlineSeatFlatAngledIcon /></ListItemIcon>
              <ListItemText primary={"APPLICATION PURGATORY"} />
            </ListItem>


        </List>
      </div>
  );

  return (
      <div>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor='left' open={isOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </div>
  );
};

export default HamBar;
