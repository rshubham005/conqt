import React from "react";

function ItemForm() {
  return (
    <div>
      <h1 className="primary-heading text-center">Item Details</h1>
      <div className="item-center">
        <div className="tertiary large-radius form-block">
          <div className="input-block-pair">
            <div className="input-block">
              <p className="bold-text">Item Name</p>
              <input
                type="text"
                className="regualar-text input-field small-radius"
                placeholder="Enter item name"
              />
              <p className="caption">Max 225 Characters</p>
            </div>
            <div className="input-block">
              <p className="bold-text">Quantity</p>
              <input
                type="number"
                className="regualar-text input-field small-radius"
                placeholder="Enter item name"
              />
              <p className="caption">Numeric Value</p>
            </div>
          </div>
          <div className="input-block-pair">
            <div className="input-block">
              <p className="bold-text">Unit Price</p>
              <input
                type="number"
                className="regualar-text input-field small-radius"
                placeholder="Enter item name"
              />
              <p className="caption">Numeric Value(USD)</p>
            </div>
            <div className="input-block">
              <p className="bold-text">Date of Submission</p>
              <input
                type="date"
                className="regualar-text input-field small-radius"
                placeholder="Enter item name"
              />
              <p className="caption">Format : MM/DD/YYYY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemForm;
