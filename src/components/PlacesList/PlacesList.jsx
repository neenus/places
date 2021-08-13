import { Grid } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import PlaceCard from "../PlaceCard/PlaceCard";

const PlacesList = () => {
  const [places, setPlaces] = useState([]);

  const API_BASE_URL =
    "https://610bb7502b6add0017cb3a35.mockapi.io/api/v1/places";
  useEffect(() => {
    const getPlaces = async () => {
      try {
        const places = await axios.get(API_BASE_URL);
        setPlaces(places.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPlaces();
  }, []);
  return (
    <div>
      <Grid container spacing={3}>
        {places.map(place => (
          <Grid item key={place.id} xs={12}>
            <PlaceCard place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PlacesList;
