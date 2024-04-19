import { configureStore } from '@reduxjs/toolkit';
import { filtersSlice } from './slices/filters/filtersSlice';
import { dataSlice } from './slices/data/dataSlice';


export const store = configureStore( {
    reducer: {
        data : dataSlice.reducer,
        filters: filtersSlice.reducer,
    }
} )
