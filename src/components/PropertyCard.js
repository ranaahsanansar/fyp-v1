import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Plot
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>

        <Button component={NavLink} to='/details' size="small">View</Button>
        <Button component={NavLink} to='/dashboard/updateProperty' size="small">Edit</Button>
        <Button size="small"><Typography sx={{color: 'red'}} >Delete</Typography> </Button>
      </CardActions>
    </Card>
  );
}