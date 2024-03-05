import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { User } from "./Redusers/User";
import { Product } from "./Redusers/Product";

let combine=combineReducers({
    user : User,
    product: Product
})

export const store=legacy_createStore(combine,applyMiddleware(thunk));