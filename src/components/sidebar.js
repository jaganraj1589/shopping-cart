import React from "react";
import { observer, inject } from "mobx-react";
import Cartproduct from "./cartproduct";

const Sidebar = inject("cartdata")(
  observer(({ cartdata }) => {
    
      const totalvalue = cartdata.totalCart()
  
    
    return (
      <div className="sideBarCart">
        <div className="cartHead">My cart ({cartdata.cartList.length})</div>
        {cartdata.cartList.length > 0 ? (
          <>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartdata.cartList &&
                cartdata.cartList.map((item, i) => <Cartproduct item={item} />)}
            </tbody>
          </table>
          <div className="totalValue"><span>Total</span> <b>$ {totalvalue}</b></div>
          </>
        ) : (
          <div className="emptyCart"> Cart is empty</div>
        )}
      </div>
    );
  })
);

export default Sidebar;
