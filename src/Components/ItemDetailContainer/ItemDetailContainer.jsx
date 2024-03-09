import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/fireBase/config';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader'; // Importa el componente Loader

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); // Estado para indicar si se está cargando la información del producto
    const { itemId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true); // Indica que se está cargando la información del producto
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
            } finally {
                setLoading(false); // Finaliza la carga de la información del producto
            }
        };

        fetchProduct();
    }, [itemId]);

    // Muestra el componente Loader mientras se carga la información del producto
    if (loading) {
        return <Loader />;
    }

    // Muestra el detalle del producto si está disponible
    return (
        <div>
            {product && <ItemDetail {...product} />}
        </div>
    );
};

export default ItemDetailContainer;
