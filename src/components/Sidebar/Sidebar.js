import React from "react";
import "./Sidebar.css";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import "./Sidebar.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    justifyContent: "flex-end",
  },
}));

export default function DrawerApp(props) {
  const classes = useStyles();

  return (
    <div className="sidebar">
      <Drawer
        open={props.value}
        className={classes.drawer}
        variant="persistent"
        onClose={props.func}
        anchor="left"
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => props.func()}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <nav className="sidebar__nav">
          <ul>
            <li>
              <a href="/">Hello word</a>
            </li>
            <li>
              <a href="/">Hello word</a>
            </li>
            <li>
              <a href="/">Hello word</a>
            </li>
          </ul>
        </nav>
      </Drawer>
    </div>
  );
}
