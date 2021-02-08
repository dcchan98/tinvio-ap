import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user-reducer";


const persistConfig = {
	key: "root",
	storage,
	// array to contain what to persist
	whitelist: ["users"],
};

const rootReducer = combineReducers({ user: userReducer });

export default persistReducer(persistConfig, rootReducer);