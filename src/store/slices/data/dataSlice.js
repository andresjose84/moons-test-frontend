import { createSlice } from '@reduxjs/toolkit';
import { initData } from '../../../data/initData';

export const dataSlice = createSlice( {
    name: 'dataSlice',
    initialState: initData,
    reducers: {
        startDatos: ( state ) => {
            state.isLoading = true;
        },
        setDatos: ( state, action ) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        stopLoading: ( state ) => {
            state.isLoading = false;
        }
    },
} );


export const { startDatos, setDatos, stopLoading } = dataSlice.actions;