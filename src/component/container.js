import React from "react"
import { noteData } from "../connfb/firebase"
import  NoteForm  from "./noteForm"
import { NoteList } from "./noteList"
const Container  = () => {
  const addData = (item)=>{
    noteData.push(item)
  }
    return <div className="container">
    <div className="row">
      <NoteList/>
      <NoteForm getData = {(item)=>addData()}/>
    </div>
  </div>
}

export {Container}