import React from "react";
import { inject, observer } from "mobx-react";
import Addremove from "../../components/manageproduct";
import Sidebar from "../../components/sidebar";
import Category from "../../components/category";

const ProductList = inject("cartdata")(
  observer(({ cartdata }) => {
    cartdata.productFilter();
    return (
      <div className="main">
        <div className="productList">         
            <Category />          
          <ul>
            {cartdata.productList.map((list, i) => (
              <Addremove list={list} />
            ))}
          </ul>
        </div>
        <Sidebar />
      </div>
    );
  })
);

export default ProductList;
