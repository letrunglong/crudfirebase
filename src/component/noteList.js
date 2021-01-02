import React, { Component} from "react"
import { noteData } from "../connfb/firebase";
import NoteItem from "./noteItems";

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    noteData.on('value', (notes) => {
      var arrData = []
      notes.forEach(elenemt => {
        const key = elenemt.key;
        const noteTitle = elenemt.val().noteTitle
        const noteContent = elenemt.val().noteContent
        arrData.push({
          id: key,
          noteTitle: noteTitle,
          noteContent: noteContent
        })
      })
      this.setState({
        data: arrData
      })
    })
  }
  getData = () => {
    if (this.state.data) {
      return this.state.data.map((value, key) => {
        return <NoteItem
          key={key}
          id={key}
          note={value}
          noteTitle={value.noteTitle}
          noteContent={value.noteContent}
        />
      })
    }

  }
  render() {
    return <div className="col">
      <div id="noteList" role="tablist" aria-multiselectable="true">
        {this.getData()}
      </div>
    </div >
  }


}

export { NoteList }