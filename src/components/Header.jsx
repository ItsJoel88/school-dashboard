import React from 'react'

import './Header.css'

import CoursesCard from './CoursesCard.jsx'

function Header() {
    return (
        <div id="header">
            <h5 id="title">School Dashboard</h5>
            <CoursesCard />
        </div>
    )
}


export default Header
