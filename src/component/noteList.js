import React, { useState } from "react"

const NoteList = () => {
    const [count, setCount] = useState("");
    
    return <div className="col">
    <div id="noteList" role="tablist" aria-multiselectable="true">
      <div className="card">
        <div className="card-header" role="tab" id="note1">
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
              Ghi chu 12/9
            </a>
          </h5>
        </div>
        <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="note1">
          <div className="card-body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas incidunt ducimus pariatur
            tenetur reiciendis. Incidunt nihil iste tempore, possimus officiis pariatur soluta
            recusandae laudantium eius aliquid accusantium, sunt omnis itaque?
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" role="tab" id="note2">
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#noteList" href="#noteContent2" aria-expanded="true" aria-controls="noteContent2">
              Ghi chu 12/9
            </a>
          </h5>
        </div>
        <div id="noteContent2" className="collapse in" role="tabpanel" aria-labelledby="note2">
          <div className="card-body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas incidunt ducimus pariatur
            tenetur reiciendis. Incidunt nihil iste tempore, possimus officiis pariatur soluta
            recusandae laudantium eius aliquid accusantium, sunt omnis itaque?
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" role="tab" id="note3">
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#noteList" href="#noteContent3" aria-expanded="true" aria-controls="noteContent3">
              Ghi chu 12/9
            </a>
          </h5>
        </div>
        <div id="noteContent3" className="collapse in" role="tabpanel" aria-labelledby="note3">
          <div className="card-body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas incidunt ducimus pariatur
            tenetur reiciendis. Incidunt nihil iste tempore, possimus officiis pariatur soluta
            recusandae laudantium eius aliquid accusantium, sunt omnis itaque?
          </div>
        </div>
      </div>
    </div>
  </div>
}

export {NoteList}