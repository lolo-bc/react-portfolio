import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import "../index.css"
import MenuIcon from '@material-ui/icons/Menu';
import Resume from '../photos/LaurenCResume.pdf'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuIcon: {
    textAlign: "right",
  }
});

function Nav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>
            <a href="/home">Home</a>
          </ListItem>
          <ListItem>
            <a href="/about">About</a>
          </ListItem>
          <ListItem>
            <a href="/portfolio">Portfolio</a>
          </ListItem>
          <ListItem>
            <a href="/skills">Skills</a>
          </ListItem>
          <ListItem>
            <a href="/contact">Contact</a>
          </ListItem>
          <ListItem>
            <a href={Resume}>Resume</a>
          </ListItem>
          <ListItem id="bottomIcon">
            <a href="//linkedin.com/in/laurencam/" fontSize="large" target="_blank"><LinkedInIcon /></a>
          </ListItem>
          <ListItem id="bottomIcon">
            <a href="//github.com/lolo-bc/" fontSize="20px" target="_blank"><GitHubIcon /></a>
          </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.menuIcon}  >

      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button  onClick={toggleDrawer(anchor, true)}><MenuIcon fontSize="large"  /></Button>
          <Drawer  anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Nav;