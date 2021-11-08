import { useEffect, useState } from 'react';
import { MenuForm, Spinner } from '../../components';

import { edificiosApi } from '../../api';

import ModalView from './ModalView';

const Edificio = () => {
    const [edificios, setEdificios] = useState(null);
    const [modalView, setModalView] = useState(false);
    const [edificio, setEdificio] = useState(null);

    useEffect(() => {
        edificiosApi.getAllEdificios().then(({ data }) => {
            setEdificios(data);
        });
    }, []);

    const showInfo = (el) => {
        setModalView(true);
        setEdificio(el);
    };

    if (!edificios) return <Spinner />;

    return (
        <>
            {modalView && <ModalView show={modalView} edificio={edificio} onHide={() => setModalView(false)} />}
            <MenuForm />
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
                                <i className="fa fa-eye" aria-hidden="true"></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Edificio;
