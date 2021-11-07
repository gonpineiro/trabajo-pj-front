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
        <>
            <OptionButton name="Crear" url="/edificios" />
        </>
    );
};

export default Menu;
