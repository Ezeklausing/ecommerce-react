import React from "react";
import {Link} from "react-router-dom"
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
    <Card sx={{ maxWidth: 250,}}  style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
          >
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/product/${product.id}`}>
          <Button size="small" color="primary">
            Ver Detalles
          </Button>
        </Link>   
      </CardActions>
    </Card>
  );
};

const styles = {
  container: {
    borderRadius:8,
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
    height: 35,
  },
};

export default Item;