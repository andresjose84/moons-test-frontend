import { createSlice } from '@reduxjs/toolkit';
import { initFilters } from '../../../data/initData';

export const filtersSlice = createSlice( {
    name: 'filtersSlice',
    initialState: initFilters,
    reducers: {
        setFilters: ( state, action ) => {
            state.types = action.payload.types;
            state.zones = action.payload.zones;
            state.services = action.payload.services;
        },
        setSelectService: ( state, action ) => {
            state.selected.services = action.payload;
        },
        setSelectZone: ( state, action ) => {
            state.selected.zones = action.payload;
        },
        setSelectType: ( state, action ) => {
            state.selected.types = action.payload;
        },
    },
} );


export const {
    setFilters,
    setSelectService,
    setSelectZone,
    setSelectType,
} = filtersSlice.actions;