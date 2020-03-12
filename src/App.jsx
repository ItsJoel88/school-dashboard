import React from 'react'
import { Button, Breadcrumb, Chip, Icon } from 'react-materialize'


export default class App extends React.Component {

    render() {
        return (
            <div>
                <p>halo</p>
                <Breadcrumb className="teal" cols={12}>
                    <a href="#ab">
                        One
                    </a>
                    <a href="#bc">
                        Two
                    </a>
                    <a href="#cd">
                        Three
                    </a>
                </Breadcrumb>
                <Button className="red" floating large node="button" waves="light">+</Button>
                <Chip
                    close
                    closeIcon={<Icon className="close">close</Icon>}
                    options={{ onChipDelete: () => { console.log('deleted') } }}
                >
                    Tag
                </Chip>
            </div >
        )
    }
}
