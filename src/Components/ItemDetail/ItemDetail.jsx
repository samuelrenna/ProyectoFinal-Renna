import React, { useContext, useState } from 'react'; 
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { cartContext } from '../../context/CartContext';


const ItemDetail = ({ id, name, img, categoryUno, categoryDos, description, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0); // Declara el estado quantityAdded y la función setQuantityAdded usando el hook useState, inicializado en 0.

    const { addItem } = useContext(cartContext)

        const handleOnAdd = (quantity) => {
        // Declara la función handleOnAdd que toma la cantidad como argumento.
        setQuantityAdded(quantity); // Actualiza el estado quantityAdded con la cantidad proporcionada.

        const item = {
            id: id,
            name: name,
            price: price
        }
        addItem(item, quantity)
    };

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card box-shadow-animation" style={{ width: '18rem'}}>
                {quantityAdded > 0 ? ( // Verifica si la cantidad agregada es mayor que 0
                    <div className="card-body">
                        {/* Si es verdadero, muestra un div con la información del producto y la cantidad agregada */}
                        <img src={img} className="card-img-top mx-auto d-block" alt={name} style={{ width: '200px', height: '200px' }} />
                        <h2 className="card-title">{name}</h2>

                        <div className="alert alert-success" role="alert">
                            {/* Alerta de éxito con la cantidad agregada al carrito */}
                            Cantidad agregada al carrito: {quantityAdded}
                        </div>

                        <div className="d-flex justify-content-between">
                                <Link to="/cart" className="btn btn-success mx-1">Ir al carrito</Link>
                        <div style={{ width: '1rem' }}></div>
                                <Link to="/" className="btn btn-primary mx-1">Seguir Comprando</Link>
                        </div>

                    </div>
                ) : (
                    <div className="card-body">
                        {/* Si es falso, muestra un div con la información del producto y el componente ItemCount */}
                        <img src={img} className="card-img-top mx-auto d-block" alt={name} style={{ width: '200px', height: '200px' }} />
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">Categoria: {categoryUno}, {categoryDos}</p>
                        <p className="card-text">{description}</p>
                        <p className="card-text">Precio: ${price}</p>
                        <p className="card-text">Stock: {stock}</p>
                        <ItemCount stock={stock} onAdd={handleOnAdd} />
                        {/* Componente ItemCount para agregar productos al carrito */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemDetail;
