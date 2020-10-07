import React,{useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";

function App(){

  const [field, setField] = useState([]);
  
  // I've created this mock API from Postman but i could use it for some time.
  useEffect(() => {
     fetch("https://306381eb-2afa-41a4-9307-7cbda716fa10.mock.pstmn.io/rexweb")
    .then(res => res.json())
    .then(result => setField(result));
    console.log(field)
  });


  const  renderData = (data, index) => {
    return(
      <tr key={index}>
        <td>{data.scrip}</td>          
        <td>{data.quantity}</td>
        <td>{data.price}</td>
        <td>{data.avg_cost}</td>
        <td>{data.invested_amount}</td>
        <td>{data.portfolio_value}</td>
        <td>{data.unrealized_PL}</td>
        <td>{data.return}</td>
      </tr>
    )
  };

  return (
    <div className="App">
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Scrip</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Avg. Cost</th>
            <th>Invested Amount</th>
            <th>% of Portfolio Value</th>
            <th>Unrealized P & L</th>
            <th>% Return</th>
          </tr>
        </thead>
        <tbody>
        {json.map(renderData)}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default App;

// I've created mock API from Postman but i could use it for some time, so here i'm using default json.
export const json = [
  {
    "scrip" : "AADR",
    "quantity" : "430",
    "price" : "$50.30",
    "avg_cost" : "$41.75",
    "invested_amount" : "$17,952.07",
    "portfolio_value" : "22.06%",
    "unrealized_PL" : "$3,676.93",
    "return" : "20.48%"
  },
  {
    "scrip" : "MFEM",
    "quantity" : "210",
    "price" : "$23.20",
    "avg_cost" : "$22.50",
    "invested_amount" : "$4,725.84",
    "portfolio_value" : "5.81%",
    "unrealized_PL" : "$146.16",
    "return" : "3.09%"
  },
  {
    "scrip" : "JPEM",
    "quantity" : "328",
    "price" : "$52.50",
    "avg_cost" : "$56.70",
    "invested_amount" : "$18,597.60",
    "portfolio_value" : "22.86%",
    "unrealized_PL" : "-$1,377.60",
    "return" : "-7.41%"
  },
  {
    "scrip" : "KEMQ",
    "quantity" : "801",
    "price" : "$20.40",
    "avg_cost" : "$22.24",
    "invested_amount" : "$17,811.04",
    "portfolio_value" : "21.89%",
    "unrealized_PL" : "-$1,470.64",
    "return" : "-8.26%"
  },
  {
    "scrip" : "KLDW",
    "quantity" : "523",
    "price" : "$32.90",
    "avg_cost" : "$26.32",
    "invested_amount" : "$13,765.36",
    "portfolio_value" : "16.92%",
    "unrealized_PL" : "$3,441.34",
    "return" : "25.00%"
  },
  {
    "scrip" : "KOIN",
    "quantity" : "335",
    "price" : "$25.40",
    "avg_cost" : "$25.40",
    "invested_amount" : "$8,509.00",
    "portfolio_value" : "10.46%",
    "unrealized_PL" : "-",
    "return" : "0.00%"
  }
];