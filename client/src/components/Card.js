import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardActionArea } from "@mui/material";

const CatCard = ({ imgUrl, onClick, score }) => (
  <Card sx={{ maxWidth: 345 }} onClick={onClick}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={imgUrl}
        alt="green iguana"
        sx={{ height: 350 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <FavoriteIcon color="secondary" />
          {score}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default CatCard;
