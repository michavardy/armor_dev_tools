import { configureStore } from '@reduxjs/toolkit';
import dummySlice from '../features/dummy/getDummySlice';


const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', storeAPI.getState())
  return result
}


export const store = configureStore({
  reducer: {
    dummySlice:dummySlice.reducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false,}).concat(loggerMiddleware)

});
