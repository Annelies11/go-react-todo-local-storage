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
      </form>
    </section>
  )
}

export default App;
