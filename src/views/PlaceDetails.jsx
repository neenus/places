import { useParams, useHistory } from "react-router-dom";
import useFetch from "../useFetch";
import { Paper, Grid, Button, Typography, makeStyles } from "@material-ui/core";
import { hidden } from "kleur";

const useStyles = makeStyles(() => ({
  imageContainer: {
    width: 400,
    objectFit: "cover",
    overflow: hidden,
    height: 300
  }
}));

const PlaceDetails = () => {
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  const { data: place, isLoading, error } = useFetch(`/places/${id}`);
  return (
    <div>
      {isLoading && <div>Loading... </div>}
      {error && <div>{error}</div>}
      {place && (
        <div>
          <Button onClick={() => history.push("/")}>Go back to Places</Button>
          <Grid container>
            <Paper className={classes.imageContainer}>
              <img
                className={classes.imageContainer}
                src={place.logo_url}
                alt="logo"
              />
            </Paper>
            <ul>
              <li>
                Business Name:{" "}
                <Typography variant="body1" color="secondary" display="inline">
                  {place.name}
                </Typography>
              </li>
              <li>
                Address:{" "}
                <Typography variant="body1" color="secondary" display="inline">
                  {place.address}
                </Typography>
              </li>
              <li>
                Website:{" "}
                <Typography variant="body1" color="secondary" display="inline">
                  {place.website_url}
                </Typography>
              </li>
              <li>
                hours:
                <br />
                {Object.keys(place.hours).map((key, index) => (
                  <div key={key}>
                    {key}:{" "}
                    <Typography
                      variant="body1"
                      color="secondary"
                      display="inline"
                    >
                      {place.hours[key]}
                    </Typography>
                  </div>
                ))}
              </li>
            </ul>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default PlaceDetails;
