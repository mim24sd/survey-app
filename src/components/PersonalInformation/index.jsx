import React from "react";
import DateInput from "../shared/DateInput/index.jsx";
import TextInput from "../shared/TextInput/index.jsx";
import styles from "./styles/styles.module.scss";

const PersonalInformation = () => {
  let section = <ul></ul>;

  section = (
    <ul className={styles.list}>
      <li>
        <TextInput label="Name" minLength={2} />
      </li>
      <li>
        <TextInput label="Family" minLength={2} />
      </li>
      <li>
        <DateInput label="Birth Date" />
      </li>
    </ul>
  );

  return section;
};

export default PersonalInformation;
