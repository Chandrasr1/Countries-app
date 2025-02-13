import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch countries from API
export const fetchCountries = createAsyncThunk("countries/fetch", async () => {
  const response = await fetch(
    "https://restcountries.com/v2/all?fields=name,region,flag"
  );
  return response.json();
});

const CountrySlice = createSlice({
  name: "country",
  initialState: {
    countries: [],
    filteredCountries: [],
    loading: false,
  },
  reducers: {
    filterByRegion: (state, action) => {
      if (action.payload === "All") {
        state.filteredCountries = state.countries;
      } else {
        state.filteredCountries = state.countries.filter(
          (country) => country.region === action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.loading = false;
      });
  },
});


export const { filterByRegion } = CountrySlice.actions;
export default CountrySlice.reducer;
