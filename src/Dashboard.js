import React, {useState} from 'react'
import {json} from "./App"
import "./Dashboard.css";
import { PieChart } from 'react-minimal-pie-chart';
import { Button } from '@material-ui/core';
import ProgressBar from 'react-bootstrap/ProgressBar'

const Dashboard = () => {
    // const [data, setData] = useState([]);

    const renderFirstColumn = (data, index) => {
        return(
            <div>
                <ul key={index} className="first-column">
                    <img src="https://getvectorlogo.com/wp-content/uploads/2020/02/ishares-vector-logo.png" alt=""/>
                    <li>Quantity {data.quantity}</li>
                    <li>Avg. Cost {data.avg_cost}</li>
                    <li>Invested Amt {data.invested_amount}</li>
                </ul>
            </div>
        )
    }

    const renderSecondColumn = (data, index) => {
        return(
            <div>
                <ul key={index} className="second-column">
                    <li>Unrealized P/L {data.unrealized_PL}</li>
                    <li>% Return {data.return}</li>
                    <Button variant="outlined">BUY</Button>
                    <Button variant="outlined">SELL</Button>
                </ul>
            </div>
        )
    }

    return (
        <div className="dashboard">
            {json.map(renderFirstColumn)}
            {json.map(renderSecondColumn)} 
            {json.map(item => item.return)} 
            <div className="progress-bar">
            <ProgressBar snimated variant="success" now={60} />
            <ProgressBar animated variant="danger" now={30} />
            </div>
            <div className="pie">
            <h1>Portfolio</h1>
            <PieChart
               center={[10, 20]}
                data={[
                    { value: 10, color: '#6e5a21', label : 'ETFs' },
                    { value: 20, color: '#34abeb', label : 'Mutual Funds' },
                ]}
                radius={10}     
                lineWidth={20}   
            />
            </div>
        </div>
    )
}

export default Dashboard
