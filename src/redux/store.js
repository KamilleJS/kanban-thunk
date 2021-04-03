import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import kanban from "./reducer";

const store = createStore(
    kanban, composeWithDevTools(applyMiddleware(thunk))
)

export default store;