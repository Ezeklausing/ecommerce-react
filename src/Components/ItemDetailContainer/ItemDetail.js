import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemDetail = ({product}) => {
  return (
    <Card sx={{ maxWidth: 300 } }  style={styles.container} >
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent style={styles.title} >
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar al carrito</Button>
        <Button size="small">Cantidad</Button>
      </CardActions>
    </Card>
  );
}

export default ItemDetail

const styles = {
    container: {
      borderRadius:8,
      width: window.innerHeight > 900 ? "25%" : "90%",
      margin: 20,
      backgroundColor: "rgba(220, 220, 220, 0.3)",
    },
    title: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      maxHeight: 200,
    },
  };