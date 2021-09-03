import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchDummy = createAsyncThunk(
  "dummy/fetchDummy", async () => {
        const response = await axios.get(`http://localhost:80/dummy`);//where you want to fetch data
        return response;
});

const initialState = {
  dummy:{},
  HasDummy: false,
  status:"idle",
  error:"good"
};

export const dummySlice = createSlice({
  name: 'dummy',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: {
    [fetchDummy.pending]: (state, action) => {
      state.status = 'loading'
    },

    [fetchDummy.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },

    [fetchDummy.fulfilled]:(state,action)=>{
      state.status='good'
      state.HasDummy=true
      console.log(action.payload)
      state.dummy=action.payload
      
    }


  }

})


export default dummySlice;
