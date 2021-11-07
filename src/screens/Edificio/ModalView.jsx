import { Modal } from 'react-bootstrap';

const ModalView = (props) => {
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
                {props.edificio && (
                    <>
                        <div className="form-group">
                            <label>Dirección</label>
                            <input type="text" className="form-control" readOnly value={props.edificio.domicilio} />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default ModalView;
