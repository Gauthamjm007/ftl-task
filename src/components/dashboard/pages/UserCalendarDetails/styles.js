import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  arrowicon: {
    color: theme.palette.custom.primary,
    height: 40,
    width: 40,
  },
  calendar: {
    height: "100vh",
  },
}));
