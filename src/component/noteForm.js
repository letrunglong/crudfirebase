import React, { Component, useState } from "react"
import { connect } from "react-redux";

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
        // console.log(this.state.noteTitle);
        // console.log(this.state.noteContent);
    }

    addData = (title, content) => {
        var item = {};
        item.noteTitle = title;
        item.noteContent = content;
        // this.props.getData(item)
        // item = JSON.stringify(item)
        this.props.addDataReducer(item) // sur dung reducer trong store
    }
    render() {
        return <div className="col-4">
            <h3>Edit Note Content</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="noteTitle">Tiêu đề</label>
                    <input onChange={   (event) => this.isChange(event) } type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNotetitle" placeholder="Note Title" />
                    <small id="helpIdNotetitle" className="form-text text-muted">Type title here</small>
                </div>
                <div className="form-group">
                    <label htmlFor="noteContent">Nội dung</label>
                    <textarea onChange={(event) =>  this.isChange(event) } type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNotecontent" placeholder="Note Contnent" defaultValue={" "} />
                    <small id="helpIdNotecontent" className="form-text text-muted">Type content here</small>
                </div>
                <button type="reset" onClick={() => this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-primary btn-block">Save</button>
            </form>
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        testconnect: state.test
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataReducer: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
// export { NoteForm }