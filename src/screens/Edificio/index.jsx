import { useEffect, useState } from 'react';

import { edificiosApi } from '../../api';

const Edificio = () => {
    const [edificios, setEdificios] = useState([]);

    useEffect(() => {
        edificiosApi.getAllEdificios().then(({ data }) => {
            setEdificios(data);
        });
    }, []);

    return (
        <table className="table table-hover ">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Domicilio</th>
                    <th scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                {edificios.map((el, key) => (
                    <tr key={key}>
                        <td>{el.nombre}</td>
                        <td>{el.domicilio}</td>
                        <td>
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Edificio;
