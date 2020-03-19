import React from 'react'

import { Collapsible, CollapsibleItem, Icon, Button, Modal, TextInput } from 'react-materialize'

function GiveScore() {
    return (
        <Modal
            actions={[
                <div>
                    <Button flat modal="close" node="button" waves="green">Close</Button>
                    <Button flat node="button" waves="green">Done</Button>
                </div>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Student Score"
            id="modal-0"
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 200,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 200,
                preventScrolling: true,
                startingTop: '4%'
            }}
            trigger={<Button node="button" className="score-button">Give Score</Button>}
        >
            <TextInput type="number" min="0" error="Score must be greater than 0" validate />
        </Modal>
    )
}

function StudentList() {

    const [students, setStudents] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/students', {
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(r => setStudents(r))
            .catch(err => console.log(err))
    }, [])

    if (!students.length) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div id="list-students">
            <h5>Student List</h5>
            <Collapsible accordion>
                {
                    students.map((student, i) => (
                        <CollapsibleItem key={student.id} expanded={false} node="div" icon={<Icon className="account_circle">account_circle</Icon>} header={student.name.toUpperCase()}>
                            <p>
                                Score : {
                                    student.score ? student.score : <GiveScore />
                                }
                            </p>
                            <p>
                                Course Id : {student.course_id}
                            </p>
                        </CollapsibleItem>
                    ))
                }
            </Collapsible>
        </div>
    )
}

export default StudentList