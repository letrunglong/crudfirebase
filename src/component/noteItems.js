import React, { Component } from 'react';
import { connect } from 'react-redux';
import { noteData } from '../connfb/firebase';

class NoteItem extends Component {
    twoActions = () => {

        this.props.changeEditStatus() //action1

        this.props.getEditData(this.props.note)
    }
    deleteData = () => {
        this.props.getDeleteData(this.props.note.id)
        this.props.alertStatusDelete("Xóa " + this.props.note.noteTitle + " thành công","danger")
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#number"+this.props.id} aria-expanded="true" aria-controls="noteContent1">
                            {this.props.noteTitle}
              </a>
                    <div className=" btn-group float-right">
                        <button className="btn btn-outline-info" onClick ={()=>this.twoActions()}>Sửa</button>
                        <button className="btn btn-secondary" onClick = {()=>this.deleteData()}>Xóa</button>
                    </div>
                    </h5>
                </div>
                <div id={"number"+this.props.id} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.noteContent}
            </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type:"CHANGE_EDIT_STATUS"
            })
        },
        getEditData: (editObject)=>{
            dispatch({
                type:"GET_EDIT_DATA",editObject
            })
        },
        getDeleteData: (deleteId)=>{
            dispatch({
                type:"DELETE"
                ,deleteId
            })
        },
        alertStatusDelete: (alertContent,typeAlert)=>{
            dispatch({
                type:"CHANGE_ALERT_STATUS_ON"
                ,alertContent,typeAlert
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
