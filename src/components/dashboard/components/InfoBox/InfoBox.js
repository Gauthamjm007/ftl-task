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

InfoBox.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  differenceValue: PropTypes.string,
  caption: PropTypes.string,
};

export default InfoBox;
