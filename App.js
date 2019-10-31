import React,{Component} from 'react';
import axios from "axios";
import Ajax from "./Ajax"

import './App.css';

class App extends Component{

  constructor(props){
    super();
    this.state={
      data:[],
      
    }
  }

  
  componentDidMount() {
    axios 
    .get("https://jsonplaceholder.typicode.com/todos")
          .then(resp=>
            this.setState({
              data:resp.data
            }))
          .catch(err=>console.log(err))
  }
  
  render()
  {
    return(<div>
      <Ajax data={this.state.data}/>
    </div>);
  }
}

export default App;
