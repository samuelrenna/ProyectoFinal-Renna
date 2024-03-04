import React, { useEffect, useState } from 'react';
import { getProductsById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                console.log(response);
                setProduct(response);
            })
            .catch(error => {
                console.log(error);
            });
    }, [itemId]);

    return (
        <div>
            {product && <ItemDetail {...product} />}
        </div>
    );
};

export default ItemDetailContainer;
