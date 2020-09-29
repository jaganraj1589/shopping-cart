import React from "react";
import "./App.css";
import Layout from "../layout";
import { Provider } from "mobx-react";
import cartdata from "../../stores/store";
import ProductList from "../list";

function App() {
  return (
    <div className="App">
      <Provider cartdata={cartdata}>
        <Layout>
          <ProductList />
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
