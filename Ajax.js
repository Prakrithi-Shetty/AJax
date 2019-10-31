import React,{Component} from 'react';




class Ajax extends Component{

    render(){

        return(
            <div>
            
           {this.props.data.filter(f=>f.completed===true&&f.id===6).map(p=>console.log(p.title))}
        
        </div>
        );
    


}
}

export default Ajax;
