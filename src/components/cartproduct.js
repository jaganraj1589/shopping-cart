import React from "react";
import { observer, inject } from "mobx-react";

const Cartproduct = inject("cartdata")(
  observer(({ cartdata, item }) => {
    const truckText = cartdata.truncate(item.title, 55, 52)
    return (
      <tr>
        <td>{truckText}</td>
        <td>{item.quantity}</td>
        <td>$ {item.price}</td>
      </tr>
    );
  })
);

export default Cartproduct;
