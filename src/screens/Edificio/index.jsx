import { useEffect, useState } from 'react';

import { edificiosApi } from '../../api';

import ModalView from './ModalView';

const Edificio = () => {
    const [edificios, setEdificios] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [edificio, setEdificio] = useState(null);

    useEffect(() => {
        edificiosApi.getAllEdificios().then(({ data }) => {
            setEdificios(data);
        });
    }, []);

    const showInfo = (el) => {
        setModalShow(true);
        setEdificio(el);
    };

    return (
        <>
            <ModalView show={modalShow} edificio={edificio} onHide={() => setModalShow(false)} />
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
                            <td onClick={() => showInfo(el)}>
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Edificio;
