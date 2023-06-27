
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './Item.scss'

const Item = ({ producto }) => {

  return (
    <Card>
      <Card.Img variant="top" src={producto.imagen} className='image'  />
      <Card.Body>
        <Card.Title>{producto.category}</Card.Title>
        <Card.Text>
          <span className='name-card'>{producto.nombre}</span>
          <span className='price'> <span>${producto.price}</span></span>
        </Card.Text>
        <Link className='btn' to={`/item/${producto.id}`}>Ver más</Link>        
      </Card.Body>     
    </Card>
  );
};

export default Item;
