import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

export default function ModalCenter(props) {
    const { children, ...rest } = props;

    return (
        <Modal
            {...rest}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {children}
        </Modal>
    );
}

ModalCenter.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
    children: PropTypes.node,
};
