import React from "react";

import { LayoutComponent } from "../../components/LayoutComponent/LayoutComponent";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles["main"]}>
      <p>Main</p>
      <LayoutComponent heading='Stephen Szpak' />
    </div>
  );
};
