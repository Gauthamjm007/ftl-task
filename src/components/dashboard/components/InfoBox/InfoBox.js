import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardHeader,
} from "@material-ui/core";
import useStyles from "./styles";

/**
 * This component is a grid based , accepts 3 props title of the card, the icon for it and value which will be displayed
 * material ui components are used
 */
const InfoBox = (props) => {
  const { className, title, value, icon, caption, ...rest } = props;

  const classes = useStyles({ ...props });

  return (
    <Card {...rest} className={clsx(classes.root, className)} elevation={0}>
      <CardHeader title={title} titleTypographyProps={{ align: "center" }} />
      <CardContent>
        <Grid container justify="center">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {icon}
            <Typography variant="h4">{value}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

InfoBox.defaultProps = {
  className: "root",
  title: "Title",
  value: "value",
};

InfoBox.propTypes = {
  /** accepts style for class*/
  className: PropTypes.string,
  /** accepts string value for heading*/
  title: PropTypes.string,
  /** accepts number for displaying*/
  value: PropTypes.string,
};

export default InfoBox;
