import React from "react";
import { observer, inject } from "mobx-react";

const Category = inject("cartdata")(
  observer(({ cartdata }) => {
    return (
     <div className="category">
       <a data-name="all" href="">All</a>
        {cartdata.categoryList.map(list => (
        <a data-name={list} href={list}>{list}</a>
      ))}
     </div>
    );
  })
);

export default Category;