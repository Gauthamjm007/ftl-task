import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-ui/core";
import useStyles from "./styles";

/**
 * This component is a Side Bar component , accepts 4 avatar ,name,role,class,material ui components are used
 */

const Profile = (props) => {
  const { className, name, avatar, role, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={Link}
        src={props.avatar}
        to="/"
      />
      <Typography className={classes.name} variant="h4">
        {props.name}
      </Typography>
      <Typography variant="body2">{props.role}</Typography>
    </div>
  );
};

Profile.defaultProps = {
  className: "root",
  avatar:
    "https://i.ibb.co/Rz8hnQG/logo512.png",
  name: "User 1",
  role: "Admin",
};

Profile.propTypes = {
  /** string value for class*/
  className: PropTypes.string,
  /** path of image*/
  avatar: PropTypes.string,
  /** user name as string*/
  name: PropTypes.string,
  /** user role as enum string*/
  role: PropTypes.string,
};

export default Profile;
