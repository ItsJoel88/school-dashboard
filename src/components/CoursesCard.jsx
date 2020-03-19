import React from 'react'
import { Row, Col, CardPanel, Icon } from 'react-materialize'

function CoursesCard() {


    const [courses, setCourses] = React.useState([])

    React.useEffect(() => {
        fetch("http://localhost:3000/courses", {
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => resp.json())
            .then(r => setCourses(r))
            .catch(err => console.log(err))
    }, [])

    if (courses.length < 1) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <Row>
                {
                    courses.map((course, i) => (
                        <Col
                            xl={4}
                            l={4}
                            m={4}
                            key={course.id}
                        >
                            <CardPanel className="white">
                                <span className="grey-text" id="time">
                                    <Icon className="alarm">alarm</Icon>
                                </span>
                                <span className="grey-text">
                                    Sun 10:00 - 15:00
                                </span>
                                <h6 className="course-name">{course.name}</h6>
                                <p>
                                    {course.description}
                                </p>
                                <p className="total-students">
                                    {course.enroll_students} Students
                                </p>
                                <p>halo</p>
                            </CardPanel>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default CoursesCard