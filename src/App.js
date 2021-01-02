import './App.css';
// import { firebaseConnect, noteData } from './connfb/firebase'
import Nav  from './component/nav';
import { NoteList } from './component/noteList';
import  NoteForm  from './component/noteForm';
import { Component } from 'react';
import { connect } from 'react-redux';
import AlertStatus from './component/alertStatus'
class App extends Component {
  showForm = () => {
    if(this.props.isEdit){
      
      return <NoteForm/>
    }
  }
  render() {
    // console.log(this.props.isEdit);
    return (
      <div className="App">
        <Nav />
        <AlertStatus/>
        <div className="container">
          <div className="row">
            <NoteList />
            {this.showForm()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
