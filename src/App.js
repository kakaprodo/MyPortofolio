import React from 'react';
import './App.css';
import Welcome from './components/welcome';

const UserContext = React.createContext({user:{}});
class App extends React.Component{
   constructor(props) {
     super(props);
   
     this.state = {
     	  user:{name:'prodo',age:12}
     };
   }
  
  render() {
  	return (
        <div className="row">
          <Welcome />
        </div>
      );
  	
  }
}

export default App;
