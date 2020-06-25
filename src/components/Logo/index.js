import React from "react";

import logoImage from "../../assets/images/burger-logo.jpg";
import css from "./style.module.css";

const Logo = () => (
  <div className={css.Logo}>
    {/* <img src={logoImage} /> */}
    <img src={logoImage} alt="" />
  </div>
);

export default Logo;
