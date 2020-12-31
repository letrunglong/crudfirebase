import './App.css';
import { firebaseConnect, noteData } from './connfb/firebase'
import { Nav } from './component/nav';
import { Container } from './component/container';
import { NoteList } from './component/noteList';
import  NoteForm  from './component/noteForm';
import { Component } from 'react';
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state={}
  // }
  // addData = (item) =>{
  //   noteData.push(item);
  // }
  render() {
    // noteData.once('value').then(function (snapshot) {
    //   console.log(snapshot.val());
    // });
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <div className="row">
            <NoteList />
            {/* <NoteForm getData={(item) => { this.addData(item) }} /> */}
            <NoteForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
