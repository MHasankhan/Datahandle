import styles from "./index.css";
import React, { PureComponent } from "react";
import { Table,Select } from "antd";
import {dataSource1,columns, pricing} from './datamodel';



class App extends PureComponent {


componentDidMount(){
    // let x=Object.keys(pricing);
    let y=Object.values( pricing["free_linux"]["SAHABA-General-I`1:4"]);

    let x=["SAHABA-General-I`1:4"];
    console.log(y);
    
}



  render() {
    return (
      <div>
          <Select   placeholder="Select"> 
              
              </Select>

        <Table dataSource={dataSource1} columns={columns} />;
      </div>
    );
  }
}



export default App;