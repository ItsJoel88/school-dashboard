import React from 'react'

import './Body.css'

import StudentList from './StudentList.jsx'
import Graphs from './Graphs.jsx'

function Body() {
    return (
        <div id="body">
            <StudentList />
            <Graphs />
        </div>
    )
}

export default Body