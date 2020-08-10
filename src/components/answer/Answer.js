import React from "react";
import styles from "./Answer.module.css";
import { Space } from "antd";

const Answer = ({ id, title }) => {
  return (
    <div className={styles.Answer_wrapper}>
      <div className={styles.Answer_container}>
        <Space>
          <div className={styles.Answer_id}>{id}</div>
          <div className={styles.Answer_title}>{title}</div>
        </Space>
      </div>
    </div>
  );
};

export default Answer;
