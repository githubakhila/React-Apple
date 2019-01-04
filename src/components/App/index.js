import React from "react";

//1 import Hello from "./hello";
 import Table from "./table/index";
 import View from "./view/index";
//3import Incrementor from "./incrementor/index";
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from 'react-router-dom'

const tableValues = [
   ['101','Tony stark','Iron Man','Avengers'],
   ['102','Peter Parker','Spider Man','Avengers'],
   ['103','Bruce Wayne','Bat Man','Justice League'],
];

const tableHeaders = ['Id','Name','Alias','Team'];

class App extends React.Component{
   render(){
      return(
         //1 <Hello name=" world"></Hello>
         <Router>
            <Switch>
               <Route exact path="/list" render={(props) => {
                  return(
                  <Table 
                     values={tableValues}  
                     headers={tableHeaders} 
                     history={props.history}/>
                  )
               }}/>
               <Route exact path="/view/:id" render={(props) => {
                  console.log(props)
                  const data = tableValues.find(val => val[0] === props.match.params.id)
                  const newRecord = {
                     name: data[1],
                     alias: data[2],
                     team: data[3]
                  }
                  return(
                     <View 
                        name  = {newRecord.name} 
                        alias = {newRecord.alias} 
                        team  = {newRecord.team} />
                  )
               }}/>
               <Route exact path="/edit/:id" render={(props) => {
                  console.log(props)
                  const data = tableValues.find(val => val[0] === props.match.params.id)
                  const newRecord = {
                     name: data[1],
                     alias: data[2],
                     team: data[3]
                  }
                  return(
                     <View 
                        name  = {newRecord.name} 
                        alias = {newRecord.alias} 
                        team  = {newRecord.team} />
                  )
               }}/>
               <Redirect to="/list"/>
            </Switch> 
         </Router>
         //3<Incrementor/>
      );
   }
}

export default App;