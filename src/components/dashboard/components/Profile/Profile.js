import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Profile = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: "User 1",
    avatar: "/logo192.png",
    role: " Admin",
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={Link}
        src={user.avatar}
        to="/"
      />
      <Typography className={classes.name} variant="h4">
        {user.name}
      </Typography>
      <Typography variant="body2">{user.role}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
