import React from "react";
import Photo from "../ui/photo/Photo";
import styles from "./Question.module.css";

const Question = ({ photoUrl, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.photo}>
          <Photo src={photoUrl} />
        </div>
        <h3 className={styles.question}>{title}</h3>
      </div>
    </div>
  );
};

export default Question;
