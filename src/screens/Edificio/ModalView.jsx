import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

import { Spinner } from '../../components';

import { dependenciasApi } from '../../api';

const ModalView = (props) => {
    const [dependencias, setDependencias] = useState([]);
    const [idDependencia, setIdDependencia] = useState(null);
    const [dependenciasVinculadas, setDependenciasVinculadas] = useState(null);
    const [edificioModal, setEdificioModal] = useState(props.edificio);
    const [loading, setLoading] = useState(true);

    const callData = () => {
        /* Esto hay que retirarlo y solucionar para traer los edificios desde las props */
        setEdificioModal(props.edificio);
        dependenciasApi.getAllDependencias().then(({ data }) => {
            setDependencias(data.filter((dep) => !dep.edificio));
            setDependenciasVinculadas(data.filter((dep) => dep.edificio && dep.edificio.id === edificioModal.id));
            setLoading(false);
        });
    };

    useEffect(() => {
        callData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const depSelect = ({ target: { value } }) => {
        if (value !== 'Seleccione...') {
            setIdDependencia(value);
        } else {
            setIdDependencia(null);
        }
    };

    const addDep = (edificio) => {
        setLoading(true);
        dependenciasApi.setEdificioById(idDependencia, edificio);
        callData();
    };

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="card-body text-center recycle">
                        <div className="d-inline-flex">
                            <span style={{ margin: 'auto' }}>{props.edificio && props.edificio.nombre}</span>
                        </div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {!loading ? (
                    <>
                        <div className="form-group">
                            <label>Dirección</label>
                            <input type="text" className="form-control" readOnly value={props.edificio.domicilio} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="input-dep">Dependencias</label>
                            <select id="input-dep" className="form-control" onChange={depSelect}>
                                <option selected value={'Seleccione...'}>
                                    Seleccione...
                                </option>
                                {dependencias.map((dep, key) => (
                                    <option key={key} value={dep.id}>
                                        {dep.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary" onClick={() => addDep(props.edificio)}>
                            Agregar
                        </button>

                        <h4>Dependencias</h4>
                        {dependenciasVinculadas && dependenciasVinculadas.map((e, key) => <div key={key}>{e.nombre}</div>)}
                    </>
                ) : (
                    <Spinner />
                )}
            </Modal.Body>
        </Modal>
    );
};

export default ModalView;
