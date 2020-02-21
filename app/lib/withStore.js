import {createStore} from "redux";
import rootReducer from "../combineReducers";
import middleware from "../combineMiddleware";

export default function configureStore (initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        middleware
    );
}
