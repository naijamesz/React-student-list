import {useState} from "react"
import "./AddForm.css"
export default function AddForm(props) {
  const {students, setStudent} = props
  const [name, setName] = useState("")
  const [gender, setGender] = useState("male") //Build state ชื่อ gender และ setGender เพื่อนำเข้าไปเก็บใน gender โดยมีค่าเริ่มต้นเป็น male
  function saveStudent(e) {
    //ฟังชั่นถ้าไม่ใส่ชื่อนักเรียนจะมีกล่องแจ้งเตือน pls input student name ถ้าป้อนจะไปเก็บในตัวแปร newStudent โดนยมีการสุ่ม id
    e.preventDefault()
    if (!name) {
      alert("Please input student name")
    } else {
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        gender: gender,
      }
      setStudent([...students, newStudent]) //Spread operator กระจาย
      setName("")
      setGender("male")
    }
  }
  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <label>Student Name</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit" className="btn-add">
          Save
        </button>
      </form>
    </section>
  )
}
