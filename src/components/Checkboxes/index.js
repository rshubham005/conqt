import React, { useState } from "react";

function Checkboxes(props) {
  const [supplierCheck, setSupplierCheck] = useState(false);
  const [itemCheck, setItemCheck] = useState(false);

  const handleCheckbox = (e) => {
    if (e.target.name === "item") {
      setItemCheck(!itemCheck);
      props.setItemCheck(!itemCheck);
      if (supplierCheck) {
        setSupplierCheck(false);
        props.setSupplierCheck(false);
      }
    } else {
      setSupplierCheck(!supplierCheck);
      props.setSupplierCheck(!supplierCheck);
      if (itemCheck) {
        setItemCheck(false);
        props.setItemCheck(false);
      }
    }
  };
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        name="item"
        checked={itemCheck}
        onClick={(e) => handleCheckbox(e)}
      />{" "}
      <label className="regualar-text">Item</label>
      <input
        type="checkbox"
        name="supplier"
        checked={supplierCheck}
        onClick={(e) => handleCheckbox(e)}
      />{" "}
      <label className="regualar-text">Supplier</label>
    </div>
  );
}

export default Checkboxes;
