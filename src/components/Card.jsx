import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import quotationmark from "../assets/quotationmark.png";

export default function ActionAreaCard(props) {
  const { imageSrc, typographyContent, designation } = props;
  console.log(imageSrc);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageSrc}
          alt="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {typographyContent}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {designation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
