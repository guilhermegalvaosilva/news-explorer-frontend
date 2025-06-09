import "./RegisterConfirmationModal.css";

function RegisterConfirmationModal({ isOpen, onClose, openLoginModal }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_confirm">
        <h2 className="confirm-modal__title">
          Registration successfully completed!
        </h2>
        <button className="modal__close" type="button" onClick={onClose} />
        <button
          className="confirm-modal__button-login"
          type="button"
          onClick={openLoginModal}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default RegisterConfirmationModal;
