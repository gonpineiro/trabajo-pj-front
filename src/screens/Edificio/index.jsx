import { useEffect, useState } from 'react';
import { MenuForm, Spinner } from '../../components';

import { edificiosApi } from '../../api';

import ModalView from './ModalView';
import ModalAdd from './ModalAdd';

const Edificio = () => {
    const [edificios, setEdificios] = useState(null);
    const [modalView, setModalView] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [edificio, setEdificio] = useState(null);

    const callData = () => {
        setEdificios(null);
        edificiosApi.getAllEdificios().then(({ data }) => {
            setEdificios(data);
        });
    };

    useEffect(() => {
        callData();
    }, []);

    const showInfo = (el) => {
        setModalView(true);
        setEdificio(el);
    };
    const showAdd = () => {
        setModalAdd(true);
    };

    if (!edificios) return <Spinner />;

    return (
        <>
            {modalView && <ModalView show={modalView} edificio={edificio} onHide={() => setModalView(false)} />}
            {modalAdd && <ModalAdd show={modalAdd} onHide={() => setModalAdd(false)} callData={callData} />}
            <MenuForm showAdd={showAdd} />
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
