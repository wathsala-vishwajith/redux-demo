import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: false,
    data2: [],
    appendData: [] as string[],
    loading: false,
    error: null,
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = !state.data;
        },
        setData2: (state, action) => {
            state.data2 = action.payload;
        },
        toggleData: (state) => {
            state.data = !state.data;
        },
        appendData: (state, action) => {
            state.appendData = [...state.appendData, action.payload];
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setData, setData2, toggleData, appendData, setLoading, setError } = dataSlice.actions;

export default dataSlice.reducer;