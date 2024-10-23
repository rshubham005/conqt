import axios from "axios";
import {
  GET_CITY_BY_COUNTRY_STATE_ID,
  GET_COUNTRY_URL,
  GET_STATE_BY_ID_URL,
} from "../utils/ApiEndPoints";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchAllCountryList = async () => {
  try {
    let response = await axios.get(`${API_BASE_URL}${GET_COUNTRY_URL}`);
    if (response.status == 200) return response.data.data.countyList;
  } catch {
    return "Some error Occured";
  }
};

export const fetchStateById = async (id) => {
  try {
    let response = await axios.get(
      `${API_BASE_URL}${GET_STATE_BY_ID_URL}${id}`
    );
    console.log("state", response);
    if (response.status == 200) return response.data.data.stateList;
  } catch {
    return "Some error Occured";
  }
};

export const fetchCityById = async (countryid, stateId) => {
  try {
    let response = await axios.get(
      `${API_BASE_URL}${GET_CITY_BY_COUNTRY_STATE_ID}?countryId=${countryid}&stateId=${stateId}`
    );
    console.log("city", response);
    if (response.status == 200) return response.data.data.cityList;
  } catch {
    return "Some error Occured";
  }
};
