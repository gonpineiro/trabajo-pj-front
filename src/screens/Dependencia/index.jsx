import { useEffect, useState } from 'react';

import { dependenciasApi } from '../../api';
import ModalView from './ModalView';

const Dependencia = () => {
    const [dependencias, setDependencias] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [dependencia, setDependencia] = useState(null);

    useEffect(() => {
        dependenciasApi.getAllDependencias().then(({ data }) => {
            setDependencias(data);
        });
    }, []);

    const showInfo = (el) => {
        setModalShow(true);
        setDependencia(el);
    };

    return (
        <>
            {modalShow && <ModalView show={modalShow} dependencia={dependencia} onHide={() => setModalShow(false)} />}
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

export default Dependencia;
