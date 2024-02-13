import { applyMiddleware, combineReducers, createStore } from "redux"
import { LoginReducer } from "./Reducer/LoginReducer"
import { composeWithDevTools } from "@redux-devtools/extension"
import { thunk } from "redux-thunk"
import { ServiceReducer } from "./Reducer/ServicesReducer"


const middleware=[thunk]
const rootreducer=combineReducers({
    auth:LoginReducer,
    service:ServiceReducer
})
const store=createStore(
    rootreducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;