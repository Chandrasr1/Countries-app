import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./CountrySlice";

const Store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

export default Store;

