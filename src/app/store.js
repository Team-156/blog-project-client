import { configureStore } from '@reduxjs/toolkit';
import SiteReducer from "../Redux/Reducer"

export const store = configureStore({
  reducer: {
    counter: SiteReducer,
  },
});
