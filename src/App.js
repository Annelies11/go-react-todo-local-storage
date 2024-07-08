import React, {useState, useEffect} from "react";
import List from "./Components/List";
import Alert from "./Components/Alert";

const App = () => {
  const [name, setName] = useState("")
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({show: false, msg: "", type: ""})
  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3 style={{marginBottom: "1.5rem", textAlign: "center"}}>
          Todo List Using Local Storage
        </h3>
        <div className="mb-3 form">
          <input type="text" className="form-control" placeholder="e.g. Mahmudi" onChange={(e) => setName(e.target.value)} value={name}/>
          <button type="submit" className="btn btn-success">{isEditing ? "Edit" : "Submit"}</button>
        </div>
      </form>
    </section>
  )
}

export default App;
