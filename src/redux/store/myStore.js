import { combineReducers, configureStore } from "@reduxjs/toolkit";

import UserReducer from '../slice/UserSlice';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
    users: UserReducer 
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const myStore = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
})

const persistedStore = persistStore(myStore);

export { myStore, persistedStore };