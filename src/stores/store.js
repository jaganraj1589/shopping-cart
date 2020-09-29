import React from "react";
import { observable, decorate, action } from "mobx";

class Cartdata {
  constructor() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {        
        this.productList = data;
        console.log(this.productList);
      });
  }
  productList = [];
  cartList = [];
  categoryList = []

  createCart = (id, name, price) => {
    let cartItems = {
      quantity: 1,
      id: id,
      title: name,
      price: price,
    };
    this.cartList.push(cartItems);
  };

  checkCart = (id) => {
    return this.cartList.find((element) => element.id == id);
  };
  
  productFilter = () => {
    const categorynames = this.productList.map((element) => element.category)
    categorynames.forEach((c) => {
      if (!this.categoryList.includes(c)) {
        this.categoryList.push(c);
      }
  });
  console.log(this.categoryList);
  }
  addTocart = (id) => {
    const filteredProduct = this.productList.filter(
      (element) => element.id == id
    )[0];
    this.createCart(
      parseInt(filteredProduct.id),
      filteredProduct.title,
      filteredProduct.price
    );
  };

  cartIndex = (id) => {
    return this.cartList.findIndex((element) => element.id == id);
  };

  productIndex = (id) => {
    return this.productList.findIndex((element) => element.id == id);
  };

  addProduct = (id) => {
    this.cartList[this.cartIndex(id)].price = `${(
      parseFloat(this.cartList[this.cartIndex(id)].price) +
      parseFloat(this.productList[this.productIndex(id)].price)
    ).toFixed(2)}`;
    this.cartList[this.cartIndex(id)].quantity++;
  };

  removeProduct = (id) => {
    if (this.cartList[this.cartIndex(id)].quantity > 1) {
      this.cartList[this.cartIndex(id)].price = `${(
        parseFloat(this.cartList[this.cartIndex(id)].price) -
        parseFloat(this.productList[this.productIndex(id)].price)
      ).toFixed(2)}`;
      this.cartList[this.cartIndex(id)].quantity--;
    } else {
      this.cartList.splice(this.cartIndex(id), 1);
    }
  };

  truncate = (str, strlength, size) => {
    return str.length > strlength ? str.substring(0, size) + "..." : str;
  };

  totalCart = () => {
    return this.cartList
      .reduce(
        (prevValue, currentValue) => prevValue + parseFloat(currentValue.price),
        0
      )
      .toFixed(2);
  };
}

decorate(Cartdata, {
  productList: observable,
  cartList: observable,
  categoryList: observable,
  elementsIndex: observable,
  addTocart: action,
  addProduct: action,
  removeProduct: action,
});

const cartdata = new Cartdata();
export default cartdata;
