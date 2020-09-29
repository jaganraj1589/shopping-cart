import React from "react";
import { observer, inject } from "mobx-react";
import AddtoCart from "./addtocart";

const Addremove = inject("cartdata")(
  observer(({ cartdata, list }) => {
    const checkId = cartdata.checkCart(list.id);
    const truckText = cartdata.truncate(list.title, 55, 52)
    // console.log(checkId);
    return (
      <li>
        <figure>
          <img src={list.image} />
        </figure>
        <p className="title">{truckText}</p>
        <b>$ {list.price}</b>
        {checkId != undefined ? (
          <div className="cartButton">
            <AddtoCart count={checkId.quantity} proid={list.id} />
          </div>
        ) : (
          <p>
            <button onClick={() => cartdata.addTocart(list.id)} className="cta">
              Add to cart
            </button>
          </p>
        )}
      </li>
    );
  })
);

export default Addremove;
