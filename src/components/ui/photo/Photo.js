import React from "react";
import styles from "./Photo.module.css";

const Photo = ({ src }) => <img src={src} className={styles.Photo} alt={src} />;

export default Photo;
