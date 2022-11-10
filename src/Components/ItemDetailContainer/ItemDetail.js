import React, {useState, useContext} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CustomProvider';


const ItemDetail = ({product}) => {
  const [alterComponent, setAlterComponent] = useState(true)
  
  const {addItem} = useContext(CartContext)

  const onAdd = (qty)=>{
      addItem(product,qty)
      setAlterComponent(false)
  }


  return (
    <Card sx={{ maxWidth: 300 } }  style={styles.container} >
      <CardMedia
        component="img"
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
        <Typography variant="h5">
            ${product.price}
        </Typography>
      </CardContent>
      <CardActions style={styles.counter}>
        {alterComponent ? <ItemCount stock={product.stock} initial = {1} onAdd={onAdd}  /> :<Link to={"/cart"}><button>Avanzar compra</button></Link>}
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
    },
    counter:{
      justifyContent:"space-between",
      
    },
  };