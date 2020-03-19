import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Select } from 'react-materialize'


const data = [
    {
        name: 'Jan', uv: 4000, pv: 2400,
    },
    {
        name: 'Feb', uv: 3000, pv: 1398,
    },
    {
        name: 'March', uv: 2000, pv: 9800,
    },
    {
        name: 'April', uv: 2780, pv: 3908,
    },
    {
        name: 'May', uv: 1890, pv: 4800,
    },
    {
        name: 'June', uv: 2390, pv: 3800,
    },
    {
        name: 'July', uv: 3490, pv: 4300,
    },
];

const data1 = [
    {
        name: 'Jan', uv: 2000, pv: 1400,
    },
    {
        name: 'Feb', uv: 2000, pv: 1398,
    },
    {
        name: 'March', uv: 2000, pv: 1800,
    },
    {
        name: 'April', uv: 2780, pv: 1908,
    },
    {
        name: 'May', uv: 2890, pv: 1800,
    },
    {
        name: 'June', uv: 2390, pv: 1800,
    },
    {
        name: 'July', uv: 2490, pv: 1300,
    },
];

const data2 = [
    {
        name: 'Jan', uv: 1000, pv: 2400,
    },
    {
        name: 'Feb', uv: 1000, pv: 2398,
    },
    {
        name: 'March', uv: 1000, pv: 2800,
    },
    {
        name: 'April', uv: 1780, pv: 2908,
    },
    {
        name: 'May', uv: 1890, pv: 2800,
    },
    {
        name: 'June', uv: 1390, pv: 2800,
    },
    {
        name: 'July', uv: 1490, pv: 2300,
    },
];

function Graphs() {

    const [value, setValue] = React.useState("1")
    const [graphsData, setGraphs] = React.useState(data)


    const filterCharts = (val) => {
        setValue(val)
        switch (val) {
            case "1":
                setGraphs(data)
                break
            case "2":
                setGraphs(data1)
                break
            case "3":
                setGraphs(data2)
                break
            default:
                setGraphs(data)
        }
    }

    return (
        <div id="course-graphs">
            <div className="filter-charts">
                <Select
                    options={{
                        classes: '',
                        dropdownOptions: {
                            alignment: 'left',
                            autoTrigger: true,
                            closeOnClick: true,
                            constrainWidth: true,
                            container: null,
                            coverTrigger: true,
                            hover: false,
                            inDuration: 150,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 250
                        }
                    }}
                    onChange={(e) => {
                        filterCharts(e.currentTarget.value)
                    }}
                    value={value}
                >
                    <option value="1">
                        Front End Development
                    </option>
                    <option value="2">
                        Back End Development
                    </option>
                    <option value="3">
                        Mobile Development
                    </option>
                </Select>
            </div>
            <BarChart
                width={500}
                height={250}
                data={graphsData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}

export default Graphs
