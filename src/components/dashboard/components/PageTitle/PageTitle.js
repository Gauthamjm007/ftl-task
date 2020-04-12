import React from "react";
import PropTypes from "prop-types";
import { Typography, Divider } from "@material-ui/core";
import useStyles from "./styles";

/**
 * This component is a Text Box , accepts 1 props title of value string,material ui components are used
 */

export default function PageTitle({ title }) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant="h2">
        {title}
      </Typography>
      <Divider />
    </>
  );
}

PageTitle.defaultProps = {
  title: "Page Title",
};
PageTitle.propTypes = {
  /** string value for heading*/
  title: PropTypes.string,
};
