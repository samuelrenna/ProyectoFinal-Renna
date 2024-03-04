import React, { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams, useLocation } from 'react-router-dom';

const ItemListContainer = () => {
const { pathname } = useLocation();
const { categoryId } = useParams();

  // Define un estado para almacenar los productos
const [products, setProducts] = useState([]);

  // Define un estado para almacenar el saludo
const [greeting, setGreeting] = useState("");

useEffect(() => {
    // Define una función asincrónica para obtener los productos
    const fetchData = async () => {
    try {
        let response;
        // Si no hay una categoría en la ruta o la ruta es '/', busca todos los productos
        if (pathname === '/' || !categoryId) {
        console.log('Buscando todos los productos...');
        response = await getProducts();
        console.log('Productos encontrados:', response);
          setGreeting("VERSUS GAMING"); // Establece el saludo para la página de inicio
        } else {
        console.log(`Buscando productos por categoría ${categoryId}...`);
        response = await getProductsByCategory(categoryId);
        console.log(`Productos de la categoría ${categoryId} obtenidos:`, response);
          // Determina el saludo según la categoría
        const greetingForCategory = categoryId === "xbox" ? "XBOX" :
            categoryId === "playstation" ? "PLAYSTATION" :
            categoryId === "nintendo" ? "NINTENDO" :
            "Categoría no reconocida";
        setGreeting(greetingForCategory);
        }
        // Establece los productos obtenidos en el estado
        setProducts(response);
    } catch (error) {
        console.error('Error:', error);
    }
    };

    // Llama a la función para obtener los productos
    fetchData();
  }, [pathname, categoryId]); // Ejecuta el efecto cuando cambia la ruta o el categoryId

  // Muestra el saludo y la lista de productos
return (
    <div>
    <h2 style={{ textAlign: 'center', fontSize: '7vw', marginTop: '3.5vw' }}>{greeting}</h2>
    <ItemList products={products} />
    </div>
);
};

export default ItemListContainer;
