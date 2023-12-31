import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexto/CartContext'
import ItemCount from '../ItemCount.js/ItemCount'
import './ItemDetail.scss'

const ItemDetail = ({ item }) => {

  const { addToCart, isInCart } = useContext(CartContext)


  const [cantidad, setCantidad] = useState(1)

  const handleAgregar = () => {

    const itemToCart = {
      id: item.id,
      imagen: item.imagen,
      nombre: item.nombre,
      precio: item.price,
      cantidad: cantidad
    }
    addToCart(itemToCart)
  };
  
  return (

    <div className='box'>

      <img src={item.imagen} className='image' alt={item.nombre} />
      <div className='content'>
        <h2 className='title'>{item.nombre}</h2>
        <div className='text'>
          <p>{item.descripcion}</p>
          <p className='price'>Precio: <span>{item.price}</span></p>
          <p className='stock'>Disponible: <span>{item.stock}</span> </p>
          <br></br>
          
          {
            item.stock === 0
            ?<>
              <p className='agregado'>No hay stock disponible</p>
              <Link className='btn' to='/'>Ir a catálogo</Link>
            </>
            :
            isInCart(item.id)
              ? <>
                <p className='agregado'>Producto agregado al carrito</p>
                <Link className='btn' to="/cart">Terminar mi compra</Link>
              </>
              : <ItemCount
                stock={item.stock}
                counter={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
              />
          }
        </div>
      </div>
    </div>

  )
}

export default ItemDetail

