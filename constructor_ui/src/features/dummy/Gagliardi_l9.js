import { configureStore,createSlice, getDefaultMiddleware, getAsyncThunk } from "@reduxjs/toolkit";

const endpoint = "https://jsonplaceholder.typecode.com/users/"

const getUsers = createAsyncThunk(
    "users/getUsers",
    (endpoint, thunkAPI)=>{
        thunkAPI.
        return fetch(endpoint)
        .then(response => {
            if (!.response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(json =>json);

    }
)

const userSlice = createSlice( {
    name:"users",
    initialState:{
        loading:"",
        error:"",
        data:[]
    },
    reducers:{
        [getUsers.pending]:(state)=>{
            state.loading="yes";
        },
        [getUsers.rejected]:(state,action)=>{
            state.loading='',
            state.error=action.payload;
        },
        [getUsers.fulfilled]:(state,action)=>{
            state.loading="",
            state.error=action.payload
        }
    }
})

const store = configureStore({
    reducer:{userReducer},
    middleware:[...getDefaultMiddleware(), loggerMiddleware]})

const butten = document.getElementById("fetch");

GamepadButton.addEventListener("click", {store.dispatch(getUsers());})