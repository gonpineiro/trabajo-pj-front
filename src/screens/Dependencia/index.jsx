import { useEffect, useState } from 'react';
import { Spinner, MenuForm } from '../../components';

import { dependenciasApi } from '../../api';
import ModalView from './ModalView';
import ModalAdd from './ModalAdd';

const Dependencia = () => {
    const [dependencias, setDependencias] = useState(null);
    const [modalView, setModalView] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [dependencia, setDependencia] = useState(null);

    const callData = () => {
        setDependencias(null);
        dependenciasApi.getAllDependencias().then(({ data }) => {
            setDependencias(data);
        });
    };

    useEffect(() => {
        callData();
    }, []);

    const showInfo = (el) => {
        setModalView(true);
        setDependencia(el);
    };

    const showAdd = () => {
        setModalAdd(true);
    };

    if (!dependencias) return <Spinner />;

    return (
        <>
            {modalView && <ModalView show={modalView} dependencia={dependencia} onHide={() => setModalView(false)} />}
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
                    {dependencias.map((el, key) => (
                        <tr key={key}>
                            <td>{el.nombre}</td>
                            <td>{el.domicilio}</td>
                            <td>
                                <i className="fa fa-eye" aria-hidden="true" onClick={() => showInfo(el)}></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Dependencia;
