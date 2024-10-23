import "./App.css";
import Header from "./components/Header/index";
import Checkboxes from "./components/Checkboxes/index";
import { useState } from "react";
import ItemForm from "./components/ItemForm";
import SupplierForm from "./components/SupplierForm";
function App() {
  const [supplierCheck, setSupplierCheck] = useState(false);
  const [itemCheck, setItemCheck] = useState(false);
  return (
    <div className="App">
      <Header />
      <Checkboxes
        setSupplierCheck={(data) => setSupplierCheck(data)}
        setItemCheck={(data) => setItemCheck(data)}
      />

      {itemCheck ? <ItemForm /> : supplierCheck ? <SupplierForm /> : null}
    </div>
  );
}

export default App;
