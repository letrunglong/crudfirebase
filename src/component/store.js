import { createStore } from "redux"
import { noteData } from "../connfb/firebase"



const noteInitialState = {
    isEdit: false,
    isAdd: false,
    editItem: {},
    alertStatus: false,
    alertContent:"",
    typeAlert: "info",
    positionAlert:"",
}
const allReducers = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem)
            return state
        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit }

        case "GET_EDIT_DATA":
            return { ...state, editItem: action.editObject }
        case "EDIT":
            noteData.child(action.getItem.id).update({
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent,
            })
            return { ...state, editItem: {} }
        case "DELETE":
            noteData.child(action.deleteId).remove();
            return state
        case "CHANGE_ADD_STATUS":
            return { ...state, isAdd: !state.isAdd }
        case "CHANGE_ALERT_STATUS_ON":
            return {...state,alertStatus: true,alertContent:action.alertContent,typeAlert:action.typeAlert,positionAlert:action.positionAlert}
        case "CHANGE_ALERT_STATUS_OFF":
            return {...state,alertStatus:false}
        default:
            return state
    }
}
const store = createStore(allReducers)
export { store }