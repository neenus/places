import {
  Grid,
  Backdrop,
  CircularProgress,
  Snackbar,
  makeStyles
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import useFetch from "../../useFetch";
import PlaceCard from "../PlaceCard/PlaceCard";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  },
  snackbar: {
    backgroundColor: theme.MuiSnackbarContent
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const PlacesList = () => {
  const classes = useStyles();
  const { data: places, isLoading, error } = useFetch("/places");

  return (
    <div>
      <Grid container spacing={3}>
        {isLoading && (
          <Backdrop className={classes.backdrop} open={isLoading}>
            <CircularProgress />
          </Backdrop>
        )}
        {places &&
          places.map(place => (
            <Grid item key={place.id} xs={12}>
              <PlaceCard place={place} />
            </Grid>
          ))}
      </Grid>
      {error && (
        <Snackbar open={error} autoHideDuration={6000}>
          <Alert severity="error">{error}</Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default PlacesList;
