import { useState } from "react"
import { Routes, Route} from 'react-router-dom';
// These are the 3 pages I'm coding for this LMS
import HomePagePublic from './HomePagePublic';
import Login from './Login/Login';
import LearnerAssignmentView from './LearnerAssignmentView/LearnerAssignmentView';

export default function App() {
  
  return (

    <div className="App">
      <Routes>
        <Route path="/HomePagePublic" element={<HomePagePublic />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/LearnerAssignmentView" element={<LearnerAssignmentView />}></Route>
      </Routes>
      </div>
    );
}