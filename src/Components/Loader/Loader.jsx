import React from 'react';
import './Loader.css'; // Importa los estilos CSS del Loader

const CustomLoader = () => {
return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <div className="spinner"></div>
    </div>
);
}

export default CustomLoader;
