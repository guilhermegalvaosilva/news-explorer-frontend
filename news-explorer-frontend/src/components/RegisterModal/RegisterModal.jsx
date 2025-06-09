import React from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function RegisterModal({
  buttonText,
  isOpen,
  onClose,
  handleRegistration,
  openLoginModal,
}) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    handleRegistration(values.email, values.password, values.username);
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="register-email" className="modal__label">
        Email{" "}
        <input
          className="modal__input"
          type="email"
          name="email"
          id="register-email"
          placeholder="Enter email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password{""}
        <input
          className="modal__input"
          type="password"
          name="password"
          id="register-password"
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
      <label htmlFor="register-username" className="modal__label">
        Username{""}
        <input
          className="modal__input"
          type="username"
          name="username"
          id="register-username"
          placeholder="Enter your username"
          value={values.username || ""}
          onChange={handleChange}
          required
          minLength={2}
        />
        {errors.username && (
          <span className="modal__error">{errors.username}</span>
        )}
      </label>
      <span className="modal__button-content-register">
        <p className="modal__button-p">or </p>
        <button
          className="modal__button-open-modal"
          type="button"
          onClick={openLoginModal}
        >
          Sign in
        </button>
      </span>
    </ModalWithForm>
  );
}

export default RegisterModal;
