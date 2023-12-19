import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

export default function ModalCenter(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <iframe
                height="480px"
                width="100%"
                src="https://www.youtube.com/embed/BoebgFpWbBY?rel=0"
                title="Centro Comercial Tlalnepantla"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style={{ borderRadius: 6 }}
            />
        </Modal>
    );
}

ModalCenter.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
}