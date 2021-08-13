import {
  Card,
  CardHeader,
  // CardMedia,
  CardContent,
  Typography,
  CardActionArea
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const PlaceCard = ({ place }) => {
  const history = useHistory();
  return (
    <div>
      <Card elevation={3}>
        <CardActionArea
          onClick={() => history.push(`/places/${place.id}`, place.id)}
        >
          <CardHeader title={place.name} />
          <CardContent>
            <Typography>Business ID: {place.id}</Typography>
            <Typography>Website: {place.website_url}</Typography>
            <Typography>Address: {place.address}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default PlaceCard;
