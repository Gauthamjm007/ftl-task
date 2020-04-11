import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { removeMember } from "../../../../actions/membersAction";
import { connect } from "react-redux";

const UserDetailBox = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id) => {
    if (id) {
      props.dispatch(removeMember(id));
    }
    setAnchorEl(null);
  };
  const { className, title, route, id, value, ...rest } = props;

  const classes = useStyles({ ...props });

  return (
    <Card {...rest} className={clsx(classes.root, className)} elevation={0}>
      <CardHeader
        action={
          <>
            <IconButton
              aria-label="more"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to={route} className={clsx(classes.route, className)}>
                  View More
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleClose(id)}>Remove</MenuItem>
            </Menu>
          </>
        }
        title={title}
        titleTypographyProps={{ align: "center" }}
      />
      <CardContent>
        <Grid container justify="center">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h4">{value}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

UserDetailBox.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
};

export default connect()(UserDetailBox);
