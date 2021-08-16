import {
  Grid,
  Backdrop,
  CircularProgress,
  Snackbar,
  makeStyles
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import { useEffect, useState } from "react";
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
  const [places, setPlaces] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL =
    "https://610bb7502b6add0017cb3a35.mockapi.io/api/v1/places";
  useEffect(() => {
    const getPlaces = async () => {
      try {
        const places = await axios.get(API_BASE_URL);
        setPlaces(places.data);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        setIsLoading(false);
        err.message ? setError(err.message) : setError(null);
      }
    };
    getPlaces();
  }, []);
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
