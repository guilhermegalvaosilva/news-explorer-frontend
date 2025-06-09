import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./LoginModal.css";

function LoginModal({
  buttonText,
  isOpen,
  onClose,
  handleLogin,
  openRegisterModal,
}) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    handleLogin(values.email, values.password);
  };

  return (
    <ModalWithForm
      title="Sign in"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="login-email" className="modal__label">
        Email{" "}
        <input
          className="modal__input"
          type="email"
          name="email"
          id="login-email"
          placeholder="Enter email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password{""}
        <input
          className="modal__input"
          type="password"
          name="password"
          id="login-password"
          placeholder="Enter password"
          value={values.password || ""}
          onChange={handleChange}
          required
          minLength={7}
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      <span className="modal__button-content--login">
        <p className="modal__button-p">or </p>
        <button
          className="modal__button-open-modal"
          type="button"
          onClick={openRegisterModal}
        >
          Sign up
        </button>
      </span>
    </ModalWithForm>
  );
}

export default LoginModal;
