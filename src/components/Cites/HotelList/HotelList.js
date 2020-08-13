import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import axios from "axios";

import classes from "./HotelList.css";

import Rooms from "./Rooms/Rooms";

const HotelList = (props) => {
  const [Room, setRooms] = useState([]);
  const [bookRoom, setbookRoom] = useState(false);

  const BookMyHotel = (Hotelid) => {
    axios
      .get(`http://localhost:3000/customer/searchRoom?HotelId=${Hotelid}`)
      .then((res) => {
        console.log(res);
        setbookRoom(true);
        console.log(res.data.rooms);
        setRooms(res.data.rooms);
      })
      .catch((error) => {
        console.log("check error ", error);
      });
    console.log("hotelid clicke", Hotelid);
  };

  return (
    <div>
      {!bookRoom ? (
        <div>
          {props.Hotels.map((ctrl) => (
            <Card key={ctrl.Hotel_id} className={classes.root}>
              {console.log(props.Hotels)}
              <CardActionArea>
                <CardMedia title="hotels" className={classes.media} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {ctrl.Hotel_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {ctrl.address}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {ctrl.city}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {ctrl.Hotel_img}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  color="primary"
                  onClick={() => BookMyHotel(ctrl.Hotel_id)}
                >
                  Book Room
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      ) : (
        <Rooms Rooms={Room} />
      )}
    </div>
  );
};

export default HotelList;
