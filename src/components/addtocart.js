import React from 'react';
import { inject, observer } from 'mobx-react';

const AddtoCart = inject("cartdata")(
  observer(({cartdata, count, proid})  => {
  return(
    <>
      <button onClick={() => cartdata.removeProduct(proid)}> - </button>
      <input value={count} onChange={e=> e.target.value} type="number"/>
      <button onClick={() => cartdata.addProduct(proid)}> + </button>
    </>
  )
})
)

export default AddtoCart;