import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

import classes from "../HotelList.css";

const Rooms = (props) => {
  const [Rooms, setRooms] = useState([]);
  setRooms();
  const BookMyRoom = (RoomId) => {
    // axios
    //   .get(`http://localhost:3000/customer/searchRoom?HotelId=${Hotelid}`)
    //   .then((res) => {
    //       set
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log("check error ", error);
    //   });
  };

  return (
    <div>
      <div>
        <Card className={classes.root}>
          {console.log(props.Rooms)}
          <CardActionArea>
            <CardMedia title="Rooms" className={classes.media} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                hotelname
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                address
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                city
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Hotel_img
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {Rooms.map((ctrl) => (
          <Card key={ctrl.Hotel_id} className={classes.root}>
            {console.log(props.Rooms)}
            <CardActionArea>
              <CardMedia title="Rooms" className={classes.media} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  hotelname
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {ctrl.address}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {ctrl.city}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {ctrl.Hotel_img}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button color="primary" onClick={() => BookMyRoom(ctrl.Hotel_id)}>
                Book Room
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
