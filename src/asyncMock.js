const asyncMock = [
    //XBOX
    {
    id:1,
    name: "Xbox Accesorio 1",
    categoryUno: "xbox",
    categoryDos: "accesorios",
    img: "https://http2.mlstatic.com/D_NQ_NP_668820-MLU73044688532_112023-O.webp",
    stock: 10,
    description: "Descripción del producto 1",
    price:416857
    },
    {
    id:2,
    name: "Xbox Juego 2",
    categoryUno: "xbox",
    categoryDos: "juegos",
    img: "https://http2.mlstatic.com/D_NQ_NP_805531-MLA54721131956_032023-O.webp",
    stock: 15,
    description: "Descripción del producto 2",
    price:478974
    },
    {
    id: 3,
    name: "Xbox Consola 3",
    categoryUno: "xbox",
    categoryDos: "consolas",
    img: "https://http2.mlstatic.com/D_NQ_NP_958249-MLU73312378233_122023-O.webp",
    stock: 5,
    description: "Descripción del producto 3",
    price:35168
    },
    //PLAYSTATION
    {
    id: 4,
    name: "PlayStyation Juego 1",
    categoryUno: "playstation",
    categoryDos: "juegos",
    img: "https://http2.mlstatic.com/D_NQ_NP_608578-MLA54959073599_042023-O.webp",
    stock: 20,
    description: "Descripción del producto 4",
    price:463
    },
    {
    id: 5,
    name: "PlayStation Accesorio 1",
    categoryUno: "playstation",
    categoryDos: "accesorios",
    img: "https://http2.mlstatic.com/D_NQ_NP_660158-MLA52349237473_112022-O.webpimagen5.jpg",
    stock: 8,
    description: "Descripción del producto 5",
    price:987
    },
    {
    id: 6,
    name: "PlayStation Consola 1",
    categoryUno: "playstation",
    categoryDos: "consolas",
    img: "https://http2.mlstatic.com/D_NQ_NP_786208-MLU74159511773_012024-O.webp",
    stock: 12,
    description: "Descripción del producto 6",
    price:654
    },
    //NINTENDO
    {
    id: 7,
    name: "Nintendo Juego 1",
    categoryUno: "nintendo",
    categoryDos: "juegos",
    img: "https://http2.mlstatic.com/D_NQ_NP_694466-MLA45733772168_042021-O.webp",
    stock: 18,
    description: "Descripción del producto 7",
    price:687
},
    {
    id: 8,
    name: "Nintendo Consola 1",
    categoryUno: "nintendo",
    categoryDos: "consolas",
    img: "https://http2.mlstatic.com/D_NQ_NP_736577-MLU72675480460_112023-O.webp",
    stock: 10,
    description: "Descripción del producto 8",
    price:6874
    },
    {id: 9,
    name: "Nintendo Accesorio 1",
    categoryUno: "nintendo",
    categoryDos: "accesorios",
    img: "https://http2.mlstatic.com/D_NQ_NP_660359-MLU74135789502_012024-O.webp",
    stock: 6,
    description: "Descripción del producto 9",
    price:354
    }
];
// buscnado los productos
export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(asyncMock);
      }, 1000);
    });
  };
  
  //buscando productos por ID para el detalle
  export const getProductsById = (productId) => {
    console.log('Buscando producto con ID:', productId);
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = asyncMock.find(
          (prod) => prod.id === parseInt(productId, 10)
        );
        console.log('Producto encontrado:', product);
        resolve(product);
      }, 1000);
    });
  };
  
  //buscando productos por categoria para el filtrado
  export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredProducts = asyncMock.filter((product) => {
          return (
            product.categoryUno === category || product.categoryDos === category
          );
        });
        console.log('Productos filtrados ayudame:', filteredProducts);
        resolve(filteredProducts);
      }, 1000);
    });
  };