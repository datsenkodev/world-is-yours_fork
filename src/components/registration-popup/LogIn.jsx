import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./signup.module.css";
import Input from "../common/Input";
import Button from "../common/Button";
import SignUp from "./SignUp";

const LogIn = ({ isOpen, onClose, openSignUp, openRemindPass }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const resetErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const validateSignUpForm = () => {
    resetErrors();

    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return false;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <div
            className={`${styles.popup} ${isOpen ? styles.open : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles.title}>Вхід</h2>
            <form
              className={styles.form}
              onSubmit={(e) => e.preventDefault() || validateSignUpForm()}
            >
              <label htmlFor="email"></label>
              <Input
                classNameInput={styles.input}
                typeInput="email"
                id="email"
                nameInput="email"
                value={email}
                placeholderInput="Ел.пошта"
                onChangeInput={(e) => setEmail(e.target.value)}
                required
              />
              <div className={styles.error}>{emailError}</div>

              <label htmlFor="password"></label>
              <Input
                classNameInput={styles.input}
                typeInput="password"
                id="password"
                nameInput="password"
                value={password}
                placeholderInput="Пароль"
                onChangeInput={(e) => setPassword(e.target.value)}
                required
              />
              <div className={styles.error}>{passwordError}</div>

              <p className={styles.remindPas} onClick={openRemindPass}>Нагадати пароль</p>
              <Button classNameBtn={styles.btn} type="submit">
                Увійти
              </Button>
              <p style={{ color: "#202020" }}>
                Ще немає акаунту?{" "}
                <span
                  style={{ textDecoration: "underline", color: "#888888", cursor: 'pointer' }}
                  onClick={openSignUp}
                >
                  Зареєструйтесь
                </span>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LogIn;
