import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";

/**
 * This component is a widget to wrap other components inside a card , it takes two props a title and a child ,it used material ui components
 */

export default function Widget(props) {
  const { children, title } = props;
  return (
    <Card elevation={0}>
      <CardHeader title={title} />
      <Divider light />
      <CardContent>{children}</CardContent>
      <Divider light />
    </Card>
  );
}

Widget.propTypes = {
  /**A child proptype for children components */
  children: PropTypes.node,
  /**A title of string */
  title: PropTypes.string,
};
