import React from "react";
import { Container } from "react-bootstrap";
import styles from "./loginRegister.module.css";
import Button from "../global/Button";
import Icon from "../global/Icon";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useForm from "../../hooks/useForm";

const initialForm = {
  emailLogin: "",
  passwordLogin: "",
};

const validateForm = (form) => {
  let errors = {};

  const user1 = {
    id: 1,
    fName: "Gloria",
    surname: "Lunar",
    email: "glorialunar@gmail.com",
    password: "theghost",
  };

  const password = form.passwordLogin;

  /* //Validación de email
  if (!form.emailLogin.trim()) {
    errors.emailLogin = "Debe ingresar su correo electrónico";   
  } else if (!form.emailLogin.match(user1.email)) {
    errors.emailLogin = "Por favor vuelva a intentarlo, sus credenciales son inválidas";
  } else {
    errors.emailLogin = "";
  }  

  //Validación de contraseña
  if (!password) {
    errors.passwordLogin = "Debe ingresar su contraseña";   
  } else if (!password.match(user1.password)) {
    errors.passwordLogin = "Por favor vuelva a intentarlo, sus credenciales son inválidas";
  } else {
    errors.passwordLogin = "";
  } 
 */

  //Validación de email
  if (!form.emailLogin.trim()) {
    errors.emailLogin = "Debe ingresar su correo electrónico";   
  } else if (!form.emailLogin.match(user1.email)) {
    errors.emailLogin = "Por favor vuelva a intentarlo, sus credenciales son inválidas";
  } else {
    errors.emailLogin = "";
  }  

  //Validación de contraseña
  if (!password) {
    errors.passwordLogin = "Debe ingresar su contraseña";   
  } else if (!password.match(user1.password)) {
    errors.passwordLogin = "Por favor vuelva a intentarlo, sus credenciales son inválidas";
  } else {
    errors.passwordLogin = "";
  } 


  return errors;
};

const message = "Su ingreso fue exitoso"

const Login = () => {
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validateForm,
    message
  );

  return (
    <div className="bgGray flex">
      <p className="headings heading1">Iniciar sesión</p>
      <Container>
        <form 
        id="loginForm"
        action="/"
        method="POST"
        onSubmit={handleSubmit}
        >
          <div className={styles.divInputs}>
            <div className={styles.groupForm}>
              <label className="text2">Correo electrónico</label>
              <input
                type="mail"
                id="emailLogin"
                name="emailLogin"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.emailLogin}
              />
              {errors.emailLogin && <p className={styles.pFormError}>{errors.emailLogin}</p>}
            </div>
            <div className={styles.groupForm}>
              <label className="text2">Contraseña</label>
              <input
                type="password"
                id="passwordLogin"
                name="passwordLogin"
                placeholder={
                  <Icon
                    icon={faEyeSlash}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.passwordLogin}
                  />
                }
              />
              {errors.passwordLogin && <p className={styles.pFormError}>{errors.passwordLogin}</p>}
            </div>
            
            <div className={styles.groupForm}>
              <Button css="buttonForm" text="Ingresar" type="submit" />
              <span className="text2 spanForm">
                ¿Aún tienes una cuenta? <a href="/register">Registrate</a>
              </span>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;


/* const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    setPasswordClass("invalid-input");
    return (
      <div className="alert alert-danger" role="alert">
        La contraseña debe tener entre 6 y 40 caracteres.
      </div>
    );
  } else if (!value.match(/^(?!.* )\S/)) {
    setPasswordClass("invalid-input");
    return (
      <div className="alert alert-danger" role="alert">
        La contraseña no puede contener espacios
      </div>
    );
  } else {
    setPasswordClass("");
  }
};
 */