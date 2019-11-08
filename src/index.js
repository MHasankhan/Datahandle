import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Data from './App';
import App from './App';
import {Table} from 'antd';

import * as serviceWorker from './serviceWorker';





var dataSource2=[
              [
                [
  
                  {SKU:"ECS-GI-4-LNX","vcpu":1,"ram":4,"price":22},
                  {SKU:"ECS-GI-8-LNX","vcpu":2,"ram":8,"price":45},
                  {SKU:"ECS-GI-16-LNX","vcpu":4,"ram":16,"price":89},
                  {SKU:"ECS-GI-24-LNX","vcpu":6,"ram":24,"price":134},
                  {SKU:"ECS-GI-32-LNX","vcpu":8,"ram":32,"price":178},
                  {SKU:"ECS-GI-40-LNX","vcpu":10,"ram":40,"price":223},
                  {SKU:"ECS-GI-48-LNX","vcpu":12,"ram":48,"price":268},
                  {SKU:"ECS-GI-56-LNX","vcpu":14,"ram":56,"price":312},
                  {SKU:"ECS-GI-64-LNX","vcpu":16,"ram":64,"price":357},
                  {SKU:"ECS-GI-72-LNX","vcpu":18,"ram":72,"price":401},
                  {SKU:"ECS-GI-80-LNX","vcpu":20,"ram":80,"price":446},
                  {SKU:"ECS-GI-88-LNX","vcpu":22,"ram":88,"price":491},
                  {SKU:"ECS-GI-96-LNX","vcpu":24,"ram":96,"price":535},
                  {SKU:"ECS-GI-104-LNX","vcpu":26,"ram":104,"price":580},
                  {SKU:"ECS-GI-112-LNX","vcpu":28,"ram":112,"price":624},
                  {SKU:"ECS-GI-120-LNX","vcpu":30,"ram":120,"price":669},
                  {SKU:"ECS-GI-128-LNX","vcpu":32,"ram":128,"price":714}			
            
                ],
                [
                  {SKU:"ECS-GII-2-LNX","vcpu":1,"ram":2,"price":15},
                  {SKU:"ECS-GII-4-LNX","vcpu":2,"ram":4,"price":31},
                  {SKU:"ECS-GII-8-LNX","vcpu":4,"ram":8,"price":61},
                  {SKU:"ECS-GII-12-LNX","vcpu":6,"ram":12,"price":92},
                  {SKU:"ECS-GII-16-LNX","vcpu":8,"ram":16,"price":123},
                  {SKU:"ECS-GII-20-LNX","vcpu":10,"ram":20,"price":153},
                  {SKU:"ECS-GII-24-LNX","vcpu":12,"ram":24,"price":184},
                  {SKU:"ECS-GII-28-LNX","vcpu":14,"ram":28,"price":214},
                  {SKU:"ECS-GII-32-LNX","vcpu":16,"ram":32,"price":245},
                  {SKU:"ECS-GII-36-LNX","vcpu":18,"ram":36,"price":276},
                  {SKU:"ECS-GII-40-LNX","vcpu":20,"ram":40,"price":306},
                  {SKU:"ECS-GII-44-LNX","vcpu":22,"ram":44,"price":337},
                  {SKU:"ECS-GII-48-LNX","vcpu":24,"ram":48,"price":368},
                  {SKU:"ECS-GII-52-LNX","vcpu":26,"ram":52,"price":398},
                  {SKU:"ECS-GII-56-LNX","vcpu":28,"ram":56,"price":429},
                  {SKU:"ECS-GII-60-LNX","vcpu":30,"ram":60,"price":460},
                  {SKU:"ECS-GII-64-LNX","vcpu":32,"ram":64,"price":490}
                ],
                [
                  {SKU:"ECS-CI-1-LNX","vcpu":1,"ram":1,"price":12},
                  {SKU:"ECS-CI-2-LNX","vcpu":2,"ram":2,"price":24},
                  {SKU:"ECS-CI-4-LNX","vcpu":4,"ram":4,"price":47},
                  {SKU:"ECS-CI-6-LNX","vcpu":6,"ram":6,"price":71},
                  {SKU:"ECS-CI-8-LNX","vcpu":8,"ram":8,"price":95},
                  {SKU:"ECS-CI-10-LNX","vcpu":10,"ram":10,"price":118},
                  {SKU:"ECS-CI-12-LNX","vcpu":12,"ram":12,"price":142},
                  {SKU:"ECS-CI-14-LNX","vcpu":14,"ram":14,"price":166},
                  {SKU:"ECS-CI-16-LNX","vcpu":16,"ram":16,"price":189},
                  {SKU:"ECS-CI-18-LNX","vcpu":18,"ram":18,"price":213},
                  {SKU:"ECS-CI-20-LNX","vcpu":20,"ram":20,"price":237},
                  {SKU:"ECS-CI-22-LNX","vcpu":22,"ram":22,"price":260},
                  {SKU:"ECS-CI-24-LNX","vcpu":24,"ram":24,"price":284},
                  {SKU:"ECS-CI-26-LNX","vcpu":26,"ram":26,"price":307},
                  {SKU:"ECS-CI-28-LNX","vcpu":28,"ram":28,"price":331},
                  {SKU:"ECS-CI-30-LNX","vcpu":30,"ram":30,"price":355},
                  {SKU:"ECS-CI-32-LNX","vcpu":32,"ram":32,"price":378},
                  {SKU:"ECS-CI-64-LNX","vcpu":64,"ram":64,"price":757},
                  {SKU:"ECS-CI-128-LNX","vcpu":128,"ram":128,"price":1514}				
                ],
                [
                  {SKU:"ECS-CII-1-LNX","vcpu":2,"ram":1,"price":20},
                  {SKU:"ECS-CII-2-LNX","vcpu":4,"ram":2,"price":40},
                  {SKU:"ECS-CII-3-LNX","vcpu":6,"ram":3,"price":60},
                  {SKU:"ECS-CII-4-LNX","vcpu":8,"ram":4,"price":81},
                  {SKU:"ECS-CII-5-LNX","vcpu":10,"ram":5,"price":101},
                  {SKU:"ECS-CII-6-LNX","vcpu":12,"ram":6,"price":121},
                  {SKU:"ECS-CII-7-LNX","vcpu":14,"ram":7,"price":141},
                  {SKU:"ECS-CII-8-LNX","vcpu":16,"ram":8,"price":161},
                  {SKU:"ECS-CII-9-LNX","vcpu":18,"ram":9,"price":181},
                  {SKU:"ECS-CII-10-LNX","vcpu":20,"ram":10,"price":202},
                  {SKU:"ECS-CII-11-LNX","vcpu":22,"ram":11,"price":222},
                  {SKU:"ECS-CII-12-LNX","vcpu":24,"ram":12,"price":242},
                  {SKU:"ECS-CII-13-LNX","vcpu":26,"ram":13,"price":262},
                  {SKU:"ECS-CII-14-LNX","vcpu":28,"ram":14,"price":282},
                  {SKU:"ECS-CII-15-LNX","vcpu":30,"ram":15,"price":302},
                  {SKU:"ECS-CII-16-LNX","vcpu":32,"ram":16,"price":323},
                  {SKU:"ECS-CII-17-LNX","vcpu":34,"ram":17,"price":343},
                  {SKU:"ECS-CII-18-LNX","vcpu":36,"ram":18,"price":363}			
                ],
                [
                  {SKU:"ECS-MI-8-LNX","vcpu":1,"ram":8,"price":36},
                  {SKU:"ECS-MI-16-LNX","vcpu":2,"ram":16,"price":73},
                  {SKU:"ECS-MI-32-LNX","vcpu":4,"ram":32,"price":145},
                  {SKU:"ECS-MI-48-LNX","vcpu":6,"ram":48,"price":218},
                  {SKU:"ECS-MI-64-LNX","vcpu":8,"ram":64,"price":290},
                  {SKU:"ECS-MI-80-LNX","vcpu":10,"ram":80,"price":363},
                  {SKU:"ECS-MI-96-LNX","vcpu":12,"ram":96,"price":435},
                  {SKU:"ECS-MI-112-LNX","vcpu":14,"ram":112,"price":508},
                  {SKU:"ECS-MI-128-LNX","vcpu":16,"ram":128,"price":580},
                  {SKU:"ECS-MI-144-LNX","vcpu":18,"ram":144,"price":653}
                ]
              ],

              [
                [
                  {SKU:"ECS-GI-4-WIN","vcpu":1,"ram":4,"price":36},
                  {SKU:"ECS-GI-8-WIN","vcpu":2,"ram":8,"price":73},
                  {SKU:"ECS-GI-16-WIN","vcpu":4,"ram":16,"price":145},
                  {SKU:"ECS-GI-24-WIN","vcpu":6,"ram":24,"price":218},
                  {SKU:"ECS-GI-32-WIN","vcpu":8,"ram":32,"price":291},
                  {SKU:"ECS-GI-40-WIN","vcpu":10,"ram":40,"price":363},
                  {SKU:"ECS-GI-48-WIN","vcpu":12,"ram":48,"price":436},
                  {SKU:"ECS-GI-56-WIN","vcpu":14,"ram":56,"price":509},
                  {SKU:"ECS-GI-64-WIN","vcpu":16,"ram":64,"price":581},
                  {SKU:"ECS-GI-72-WIN","vcpu":18,"ram":72,"price":654},
                  {SKU:"ECS-GI-80-WIN","vcpu":20,"ram":80,"price":727},
                  {SKU:"ECS-GI-88-WIN","vcpu":22,"ram":88,"price":799},
                  {SKU:"ECS-GI-96-WIN","vcpu":24,"ram":96,"price":872},
                  {SKU:"ECS-GI-104-WIN","vcpu":26,"ram":104,"price":944},
                  {SKU:"ECS-GI-112-WIN","vcpu":28,"ram":112,"price":1017},
                  {SKU:"ECS-GI-120-WIN","vcpu":30,"ram":120,"price":1090},
                  {SKU:"ECS-GI-128-WIN","vcpu":32,"ram":128,"price":1162}	
                ],
                [
                  {SKU:"ECS-GII-2-WIN","vcpu":1,"ram":2,"price":22},
                  {SKU:"ECS-GII-4-WIN","vcpu":2,"ram":4,"price":45},
                  {SKU:"ECS-GII-8-WIN","vcpu":4,"ram":8,"price":89},
                  {SKU:"ECS-GII-12-WIN","vcpu":6,"ram":12,"price":134},
                  {SKU:"ECS-GII-16-WIN","vcpu":8,"ram":16,"price":179},
                  {SKU:"ECS-GII-20-WIN","vcpu":10,"ram":20,"price":223},
                  {SKU:"ECS-GII-24-WIN","vcpu":12,"ram":24,"price":268},
                  {SKU:"ECS-GII-28-WIN","vcpu":14,"ram":28,"price":313},
                  {SKU:"ECS-GII-32-WIN","vcpu":16,"ram":32,"price":357},
                  {SKU:"ECS-GII-36-WIN","vcpu":18,"ram":36,"price":402},
                  {SKU:"ECS-GII-40-WIN","vcpu":20,"ram":40,"price":447},
                  {SKU:"ECS-GII-44-WIN","vcpu":22,"ram":44,"price":491},
                  {SKU:"ECS-GII-48-WIN","vcpu":24,"ram":48,"price":536},
                  {SKU:"ECS-GII-52-WIN","vcpu":26,"ram":52,"price":581},
                  {SKU:"ECS-GII-56-WIN","vcpu":28,"ram":56,"price":625},
                  {SKU:"ECS-GII-60-WIN","vcpu":30,"ram":60,"price":670},
                  {SKU:"ECS-GII-64-WIN","vcpu":32,"ram":64,"price":715}				
                ]  
              ]
            ]
   
// test=()=>pricing;
// function Test(props){
  
//   return(
//           <div>
//             {pricing.free_linux["SAHABA-Compute-I`1:1"]}
//           </div>  
//   )

{/* <Data dataSource1={dataSource1} columns={columns} /> */}
// ReactDOM.render(<Test pricing={pricing}/>, document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
