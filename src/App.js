import React,{Component} from 'react';

 class App extends Component {
  render(){
   return (
    <div className="App">
     <Great name='Ahmed' hero='myself'/>
     <Great name ='Aly' hero='superman'/>
     <Great name='Ramy' hero='batman'/>
     from function component props.
     <br/><p>--------------------------</p>
     <Welcome name='Ahmed' hero='myself'/>
     <Welcome name ='Aly' hero='superman'/>
     <Welcome name='Ramy' hero='batman'/>
     from class component props.

    </div>
  );
}
}

//child1
class Welcome extends Component{
  render(){
      return <h4>
        Welcome {this.props.name} known as {this.props.hero}.
        </h4>
  }
}

//child2
function Great (prop){
  //console.log(prop)
  return <h4>
    Hello {prop.name} also K.A. {prop.hero}.
    </h4>
}



export default App;