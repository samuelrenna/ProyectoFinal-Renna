import React from 'react';
import { NavLink } from 'react-router-dom'; // Importa NavLink desde react-router-dom


const Item = ({ id, name, img, price, stock, categoryUno, categoryDos }) => {
    return (
        <div>
            <div className="container d-flex justify-content-center mt-5">
                <div className="card box-shadow-animation" style={{ width: '18rem'}}>
                    <img src={img} className="card-img-top mx-auto" alt={name} style={{ width: '200px', height: '200px' }} />
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">Categoria: {categoryUno}, {categoryDos}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Stock: {stock}</li>
                        <li className="list-group-item">Precio: ${price}</li>
                        <li className="list-group-item">
                            <NavLink to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                                <button className="btn btn-primary">
                                    Ver detalle
                                </button>
                            </NavLink>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Item;
