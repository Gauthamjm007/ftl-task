import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Toolbar, IconButton, AppBar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import ThemeToggler from "../../../../components/ThemeToggler/ThemeToggler";

/**
 * This component is a top bar it accpets 4 props a style ,onToggleSidebar , openSideBar, childreb
 */

function Topbar(props) {
  const { className, children, openSidebar, onToggleSidebar } = props;
  const classes = useStyles(props);

  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.brandWrapper}>
          <div className={classes.logo}>
            <div align="center">
              Full Throttle Labs
              <img src="/ftl.png" alt="logo" className={classes.logoimg}></img>
            </div>
          </div>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu"
            onClick={onToggleSidebar}
          >
            {openSidebar ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <ThemeToggler className={classes.themeToggler} />
        <IconButton className={classes.homeButton}>
          <Link to="/details">
            <HomeIcon className={clsx(classes.homeicon, className)} />
          </Link>
        </IconButton>
      </Toolbar>
      {children}
    </AppBar>
  );
}

Topbar.propTypes = {
  /** a style class name */
  className: PropTypes.string,
  /** a call back funciton on toogle */
  onToggleSidebar: PropTypes.func,
  /** a sidebar on open */
  openSidebar: PropTypes.bool,
  /** a children to accept props */
  children: PropTypes.node,
};

export default Topbar;
