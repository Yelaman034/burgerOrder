import React from "react";

import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      <MenuItem exact link="/">
        ШИНЭ ЗАХИАЛГА
      </MenuItem>
      <MenuItem link="/orders">ЗАХИАЛГНУУД</MenuItem>
    </ul>
  </div>
);

export default Menu;
