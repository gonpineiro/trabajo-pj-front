import { Modal } from 'react-bootstrap';

const ModalView = (props) => {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="card-body text-center recycle">
                        <div className="d-inline-flex">
                            <span style={{ margin: 'auto' }}>{props.dependencia && props.dependencia.nombre}</span>
                        </div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label>Dirección</label>
                    <input type="text" className="form-control" readOnly value={props.dependencia.domicilio} />
                </div>
                <hr />
                <h4>Edificio</h4>
                <hr />
                {props.dependencia.edificio && (
                    <>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" className="form-control" readOnly value={props.dependencia.edificio.nombre} />
                        </div>
                        <div className="form-group">
                            <label>Dirección</label>
                            <input type="text" className="form-control" readOnly value={props.dependencia.edificio.domicilio} />
                        </div>{' '}
                    </>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default ModalView;
