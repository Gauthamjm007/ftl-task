import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import { TopBar, Sidebar } from "./components";
import useStyles from "./styles";
/**
 * This component is a dashboard it has side bar and nav bar and it is fixed for other components, it accepts a props that is children node
 */

function Dashboard({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className={classes.root}>
      <TopBar openSidebar={openSidebar} onToggleSidebar={handleToggleSidebar} />
      <Sidebar
        onClose={handleToggleSidebar}
        open={openSidebar}
        variant={isDesktop ? "persistent" : "temporary"}
      />
      <main
        className={clsx({
          [classes.contentShift]: openSidebar,
          [classes.content]: true,
        })}
      >
        {children}
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  //children components that can be wrapped
  children: PropTypes.node,
};

export default Dashboard;
