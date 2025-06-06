import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  title,
  onClose,
  onSubmit,
  children,
  isValid,
  buttonText,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_form">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose} />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button
            className={`modal__submit ${!isValid && "modal__submit_disabled"}`}
            type="submit"
            disabled={!isValid}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
