import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const OptionButton = ({ name, url, target, rel }) => {
        return (
            <div className="col-12 mx-auto text-center mb-3" style={{ minWidth: '300px' }}>
                <Link className="btn btn-blue" target={target || ''} rel={rel || ''} to={url}>
                    {name}
                </Link>
            </div>
        );
    };
    return (
        <div className="container pt-5">
            <h2 className="titulo text-center mb-5">Seleccione una opción</h2>
            <div className="row mt-5">
                <OptionButton name="Crear" url="/edificios" />
            </div>
        </div>
    );
};

export default Menu;
