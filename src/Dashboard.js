import React, {useState} from 'react'
import {json} from "./App"
import "./Dashboard.css";
import { PieChart } from 'react-minimal-pie-chart';
import { Button } from '@material-ui/core';
import ProgressBar from 'react-bootstrap/ProgressBar'

const Dashboard = () => {

    const renderColumns = (data, index) => {
        return(
            <div className="main-data">
            <div className="column">
                <table key={index}>
                    <tr>
                    <img src="https://getvectorlogo.com/wp-content/uploads/2020/02/ishares-vector-logo.png" alt=""/>
                    </tr>
                    <tr>
                    <td>Quantity</td>
                    <td><b>{data.quantity}</b></td>
                    </tr>
                    <tr>
                    <td>Avg. Cost</td>
                    <td><b>{data.avg_cost}</b></td>
                    </tr>
                    <tr>
                    <td>Invested Amt</td>
                    <td><b>{data.invested_amount}</b></td>
                    </tr>
                </table>
            </div>
            <div className="column">
             <table key={index}>
                 <tr>
                 <td><b>Market Value</b></td>
                 <td><b>{data.unrealized_PL}</b></td>
                 </tr>
                 <tr>
                 <td>% of portfolio value</td>
                 <td><b>{data.return}</b></td>
                 </tr>
                 <ProgressBar animated variant="success" now={60}/>
             </table>
             </div>
             <div className="column">
             <table key={index}>
                 <tr>
                 <td><b>Unrealized P/L</b></td>
                 <td><b>{data.unrealized_PL}</b></td>
                 </tr>
                 <tr>
                 <td>% Return</td>
                 <td><b>{data.return}</b></td>
                 </tr>
                 <ProgressBar animated variant="danger" now={30}/>
             </table>
             </div>
             <div className="column-button">
             <table key={index}>
                 <tr>
                 <td><Button variant="outlined" style={myStyle}>BUY</Button></td>
                 </tr>
                 <tr>
                 <td><Button variant="outlined" style={myStyle}>SELL</Button></td>
                 </tr>
             </table>
             </div>
         </div>
        )
    };

    const myStyle = {
        color: "#d4893d",
        fontWeight: "bold",
        border : "3px",
        border : "solid", 
        borderColor : "#d4893d",
        background : "white",
        width : "10px",
        alignItems : "right" 
    }

    return (
        <div className="dashboard">
            <div>
                {json.map(renderColumns)}
            </div>
            <div>
                <div className="pie">
                <h1>Portfolio</h1>
                </div>
            </div>
        </div>
    );
}

export default Dashboard
