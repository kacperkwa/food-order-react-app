import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
	return <div className={classes.backdrop} onClick={props.onClick}></div>;
};
const ModalOverlay = props => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};
const portalELement = document.getElementById('overlays');
const Modal = props => {
	return (
		<Fragment>
			{createPortal(<Backdrop onClick={props.onClick} />, portalELement)}
			{createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalELement
			)}
		</Fragment>
	);
};

export default Modal;
