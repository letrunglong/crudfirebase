import React, { Component } from 'react'
import { connect } from 'react-redux'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state={
            // isTrue: true
        }
    }
    
    handleAddForm = (event) => {
        event.preventDefault(); //bỏ thuộc tính Href mặc định của thẻ 
        // this.setState({
        //     isTrue : !this.state.isTrue
        // })
        this.props.changeEditStatus()
        this.props.changeAddStatus()

    }
    render(){ 
        return (
            <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{ backgroundColor: 'black' }}>
                <a className="navbar-brand" href="#">Redux</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://lms.edumall.vn/courses/hoc-lap-trinh-frontend-theo-lo-trinh-level-03-git-sass-react-js/lecture/193" onClick={(event) => this.handleAddForm(event)}>Add New Note List</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit,

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        changeAddStatus: () => {
            dispatch({
                type: "CHANGE_ADD_STATUS"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)