import "./StudentList.css"
import Item from "./Item"
import {useState} from "react"

export default function StudentList(props) {
  const [show, setShow] = useState(true) //true แสดงเนื้อหา , false ซ่อนเนื้อหา
  const {students, deleteStudent} = props
  return (
    <>
      <ul>
        <div className="header">
          <h1>Students ({students.length})</h1>
          <button onClick={() => setShow(!show)}>{show ? "Hidden" : "Show"}</button>
        </div>
        {show && students.map((data) => <Item key={data.id} data={data} deleteStudent={deleteStudent} />)}
      </ul>
    </>
  )
}
