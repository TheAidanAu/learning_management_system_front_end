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

  // This function toggles the completion status of an assignment  
  function toggleAssignment(id, completed) {
    // This updates the assignmentList by mapping over 
    // the current assignmentList and toggling the completion status 
    // of the assignment for a particular id 
    setAssignmentList(currentAssignments => {
      return currentAssignments.map(assignment => {
        if (assignment.id === id) {
          return { ...assignment, completed}
        }

        return assignment
      })
    })
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">GitHub URL</label>
        {/* An input field which let a user enter the GitHub URL.
            The value is stored in the newAssignment state variable.
            The setNewAssginment function updates the newAssignment variable when the input changes */}
        <input value={newAssignment} 
        onChange={e => setNewAssignment(e.target.value)} 
        type="text" id="item" />
      </div>
      <button className ="btn">Submit</button>
      </form>
      <h1 className="header">Assignment List</h1>
      <ul className="list">
        {/* This is a coniditional rendering. 
        If the length of the assignmentList is 0, then it will show this message */}
        {assignmentList.length === 0 && "No Assignments anymore. Please add a new assignment"}
        {/* This maps over the assignmentList array and returns a list item element for each assignment object  */}
        {assignmentList.map(assignment => {
          return (
          <li key={assignment.id}>
          <label>
            <input type="checkbox" checked={assignment.completed}
            onChange={e => toggleAssignment(assignment.id, e.target.checked)}/>
            {assignment.title}
          </label>
        </li>
        )
        })}
      </ul>
      </>
    )
}