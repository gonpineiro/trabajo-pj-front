import { useState } from 'react';
import { Modal } from 'react-bootstrap';

import { edificiosApi } from '../../api';

const ModalAdd = (props) => {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');

    const handlerNombreChange = ({ target: { value } }) => {
        setNombre(value);
    };

    const handlerDireccionChange = ({ target: { value } }) => {
        setDireccion(value);
    };

    const postDependencia = () => {
        edificiosApi
            .insertEdificio({
                nombre: nombre,
                domicilio: direccion,
            })
            .then(() => {
                props.callData();
                props.onHide(true);
            });
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="card-body text-center recycle">
                        <div className="d-inline-flex">
                            <span style={{ margin: 'auto' }}>Agregar Edificio</span>
                        </div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" onChange={handlerNombreChange} />
                </div>
                <br />
                <div className="form-group">
                    <label>Dirección</label>
                    <input type="text" className="form-control" onChange={handlerDireccionChange} />
                </div>
                <br />
                <button type="submit" className="btn btn-primary" onClick={postDependencia} disabled={!nombre || !direccion}>
                    Agregar
                </button>
            </Modal.Body>
        </Modal>
    );
};

export default ModalAdd;
