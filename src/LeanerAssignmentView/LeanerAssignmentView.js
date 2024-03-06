import { useState } from "react"

export default function LeanerAssignmentView() {
  const [newAssignment, setNewAssignment] = useState("")
  const [assignmentList, setAssignmentList] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    
    // This updates the assignmentList state varaible by 
    // adding a newAssignment object to the current assignemtnList
    setAssignmentList(currentAssignmentList => {
      return [
        ...currentAssignmentList,
        { id: crypto.randomUUID(), title: newAssignment, completed: false
        }, 
      ]
    }
    )
    // This empties the text box/field after clicking Submit
    setNewAssignment("")
  }


}