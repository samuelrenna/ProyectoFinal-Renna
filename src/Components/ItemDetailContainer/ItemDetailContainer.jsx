import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/fireBase/config';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log('Buscando producto con ID:', itemId);
                const productDoc = doc(db, 'productos', itemId);
                const productSnapshot = await getDoc(productDoc);
                if (productSnapshot.exists()) {
                    console.log('Producto encontrado:', productSnapshot.data());
                    setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
                } else {
                    console.log('No existe ningún producto con el ID proporcionado.');
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            }
        };

        fetchProduct();
    }, [itemId]);

    return (
        <div>
            {product && <ItemDetail {...product} />}
        </div>
    );
};

export default ItemDetailContainer;
