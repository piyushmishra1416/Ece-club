import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard(props) {
  const { imageSrc, typographyContent, designation } = props;

  return (
    <Card
      sx={{
        maxWidth: 300,
    
        borderRadius: 3,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        marginBottom: 4,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={imageSrc}
          alt="Description of the image"
          sx= {{height: 350}}
        />
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "1.2em",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {typographyContent}
          </Typography>
          {designation && (
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "1em",
                color: "#666",
              }}
            >
              {designation}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
