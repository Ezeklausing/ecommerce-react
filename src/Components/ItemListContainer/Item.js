import React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

const Item = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.imagen}
          alt={product.nombre}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
          >
            {product.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver Detalles
        </Button>
      </CardActions>
    </Card>
  );
};

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "rgba(220, 220, 220, 0.3)",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 200,
  },
};

export default Item;