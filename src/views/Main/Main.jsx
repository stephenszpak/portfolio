import React from "react";

import { Layout } from "../../components/Layout/Layout";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles["main"]}>
      <p>Main View</p>
      <Layout heading='Stephen Szpak' />
    </div>
  );
};
