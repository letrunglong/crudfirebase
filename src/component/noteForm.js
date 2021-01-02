import React, { Component } from "react"
import { connect } from "react-redux";

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            id: ''
        }
    }
    changeTitle = () => {
        if(this.props.isAdd){
            return "Add New Note"
        }else{return "Edit Note"}
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    componentWillMount() {
        if (this.props.editItem) {
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.id
            })
        }
    }

    addData = (title, content) => {
        if (this.state.id) {
           var editObject = {}
           editObject.id = this.state.id
           editObject.noteContent = this.state.noteContent
           editObject.noteTitle = this.state.noteTitle

           this.props.changeEditStatus()
           this.props.editDataStore(editObject)
           this.props.onAlertStatus("Sửa thành công","warning","top-left")
           
        } else {
            var item = {};
            item.noteTitle = title;
            item.noteContent = content;
            this.props.addDataReducer(item)
            this.props.onAlertStatus("Thêm thành công","success")
        }
        // this.props.changeAlertStatus()

    }
    render() {
        return <div className="col-4">
            <h3>{this.changeTitle()}</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="noteTitle">Tiêu đề</label>
                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.editItem.noteTitle} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNotetitle" placeholder="Note Title" />
                    <small id="helpIdNotetitle" className="form-text text-muted">Type title here</small>
                </div>
                <div className="form-group">
                    <label htmlFor="noteContent">Nội dung</label>
                    <textarea onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNotecontent" placeholder="Note Contnent" defaultValue={this.props.editItem.noteContent} />
                    <small id="helpIdNotecontent" className="form-text text-muted">Type content here</small>
                </div>
                <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary btn-block">Save</button>
            </form>
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        isEdit:state.isEdit,
        isAdd:state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataReducer: (getItem) => {
            dispatch({ type: "ADD_DATA", getItem })
        },
        editDataStore: (getItem) => {
            dispatch({ type: "EDIT", getItem })
        },
        changeEditStatus: () =>{
            dispatch({
                type:"CHANGE_EDIT_STATUS"
            })
        },
        onAlertStatus: (alertContent,typeAlert,positionAlert) =>{
            dispatch({
                type:"CHANGE_ALERT_STATUS_ON",alertContent,typeAlert,positionAlert
            })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
// export { NoteForm }