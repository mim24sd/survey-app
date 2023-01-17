import React, { useState, useContext } from "react";
import SurveyInformation from "../../context/SurveyInformation/index.jsx";
import styles from "./styles/styles.module.scss";

const TextInput = ({ label, minLength, isRequired = true }) => {
  let [errorText, setErrorText] = useState("");
  const [info, setInfo] = useContext(SurveyInformation);
  console.log(info);
  const handleInputValue = (event) => {
    const textLength = event.target.value.length;
    const title = event.target.previousSibling.data;

    if (textLength === 0) {
      setErrorText("Can't be empty.");
    } else if (textLength < minLength) {
      setErrorText(`Must be at least ${minLength} characters Long`);
    } else {
      setErrorText("");

      if (title === "Name") {
        setInfo((info.user.name = event.target.value));
      } else {
        setInfo((info.user.family = event.target.value));
      }
    }
  };

  return (
    <label className={styles.label}>
      {label}
      <input
        className={`${styles.input} ${errorText ? styles.error : ""}`}
        type="text"
        minLength={minLength}
        required={isRequired}
        onBlur={handleInputValue}
        onChange={handleInputValue}
      />
      {errorText && <p className={styles.errorText}>{errorText}</p>}
    </label>
  );
};

export default TextInput;
