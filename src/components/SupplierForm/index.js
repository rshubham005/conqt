import React, { useEffect, useState } from "react";
import {
  fetchAllCountryList,
  fetchCityById,
  fetchStateById,
} from "../../api/apiServiceHandler";

function SupplierForm() {
  const [countryList, setCountryist] = useState([]);
  const [stateList, setStateist] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [country, setCountry] = useState(0);
  const [state, setState] = useState(0);
  const [countryCode, setCountryCode] = useState(91);

  const getCountries = async () => {
    let result = await fetchAllCountryList();
    // console.log(result);
    setCountryist(result);
  };
  useEffect(() => {
    getCountries();
  }, []);

  const getState = async (id) => {
    let result = await fetchStateById(id);
    console.log(result);
    setStateist(result);
  };
  const getCity = async (id) => {
    let result = await fetchCityById(country, id);
    console.log(result);
    setCityList(result);
  };
  const handleCountryChange = (e) => {
    // e.preventDefault();
    setCountry(e.target.value);
    getState(e.target.value);   
    // setCountryCode(tempcountrycode.phonecode);
  };
  const handleStateChange = (e) => {
    getCity(e.target.value);
    setState(e.target.value);
  };

  return (
    <div>
      <h1 className="primary-heading text-center">Supplier Details</h1>
      <div className="item-center">
        <div className="tertiary large-radius form-block">
          <div className="input-block-pair">
            <div className="input-block">
              <p className="bold-text">Supplier Name</p>
              <input
                type="text"
                className="regualar-text input-field small-radius"
                placeholder="Enter item name"
              />
              <p className="caption">Max 225 Characters</p>
            </div>{" "}
            <div className="input-block">
              <p className="bold-text">Company Name</p>
              <input
                type="text"
                className="regualar-text input-field small-radius"
                placeholder="Enter item name"
              />
              <p className="caption">Max 225 Characters</p>
            </div>
          </div>
          <div className="input-block-pair">
            <div className="input-block">
              <p className="bold-text">Country</p>
              <select
                name="country"
                className="regualar-text input-field small-radius"
                id="country"
                value={country}
                onChange={(e) => handleCountryChange(e)}
              >
                <option value={0}>Select Country</option>
                {countryList.map((item) => {
                  return (
                    <option
                      name="country"
                      key={item.countryId}
                      value={item.countryId}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <p className="caption">Select Country From list</p>
            </div>
            <div className="input-block">
              <p className="bold-text">State</p>
              <select
                name="State"
                className="regualar-text input-field small-radius"
                id="state"
                value={state}
                onChange={(e) => handleStateChange(e)}
              >
                <option value={0}>Select State</option>
                {stateList?.map((item, index) => {
                  return (
                    <option key={index} value={item.stateId}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <p className="caption">Select State From list</p>
            </div>
          </div>
          <div className="input-block-pair">
            <div className="input-block">
              <p className="bold-text">City</p>
              <select
                name="City"
                className="regualar-text input-field small-radius"
                id="city"
              >
                <option value={0}>Select City</option>
                {cityList?.map((item, index) => {
                  return (
                    <option key={index} value={item.cityid}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <p className="caption">Select State From list</p>
            </div>
            <div className="input-block">
              <p className="bold-text">Email Address</p>
              <input
                type="email"
                className="regualar-text input-field small-radius"
                placeholder="Enter email address"
              />
              <p className="caption">Valid email Format </p>
            </div>
          </div>
          <div className="input-block-pair">
            <div className="input-block">
              <p className="bold-text">Phone Number</p>
              <input
                type="number"
                className="regualar-text input-field small-radius"
                placeholder={`+${countryCode}`}
              />
              <p className="caption">Enter your contact number</p>
            </div>{" "}
            {/* <div className="input-block">
              <p className="bold-text">Email Address</p>
              <input
                type="text"
                className="regualar-text input-field small-radius"
                placeholder="Enter email address"
              />
              <p className="caption">Valid email Format </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplierForm;
