import React from "react";
import { observer, inject } from "mobx-react";

const Header = inject("cartdata")(
  observer(({ cartdata }) => {
    return (
      <header>
        <a className="logo" href="/"><img src ="https://upload.wikimedia.org/wikipedia/commons/e/e8/OShopping_2015.png" /></a>
      </header>
    );
  })
);

export default Header;
