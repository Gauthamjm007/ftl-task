import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Hidden,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import pages from "./pages";
import { Profile } from "../../../../components";
import useStyles from "./styles";

/**
 * This component is a side bar it accpets 4 props a style ,on close what to do , open, variant
 */

function Sidebar(props) {
  const { open, variant, onClose } = props;
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      open={open}
      onClose={onClose}
      variant={variant}
    >
      <section className={classes.root}>
        <Hidden mdUp>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </Hidden>
        <Profile className={classes.profile} />
        <List component="div" disablePadding>
          {pages.map((page) => (
            <ListItem
              key={page.title}
              activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={NavLink}
              to={page.href}
            >
              <ListItemIcon className={classes.listItemIcon}>
                {page.icon}
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={page.title}
              />
            </ListItem>
          ))}
        </List>
      </section>
    </Drawer>
  );
}
Sidebar.propTypes = {
  //classs name for style
  className: PropTypes.string,
  //event handler to perform what to do on close
  onClose: PropTypes.func,
  //boolean value weather it is open or close
  open: PropTypes.bool.isRequired,
  //a string variant
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
