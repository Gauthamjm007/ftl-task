import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";

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
  children: PropTypes.node,
  title: PropTypes.string,
};
