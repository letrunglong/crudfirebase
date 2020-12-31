import { createStore } from "redux"
import {noteData} from "../connfb/firebase"



const noteInitialState = {
    test:"test connect redux"
}
const allReducers = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log("connect thanh cong" + action.getItem);
            noteData.push(action.getItem)
            return state
        default:
            return state
    }
}
const store = createStore(allReducers)
export {store}