import React from 'react';
import { HashRouter as Router } from "react-router-dom"
import BasicRoutes from './router/index';
import Nav from './components/nav';

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
            <div className="welcome col s12">
               <div className="darken col s12"> 
                 <Router>
                    <Nav />
                    <div className="div-nav-body"></div>
                    <BasicRoutes />
                 </Router>
               </div>
            </div>
        </div>
      );
  	
  }
}

export default App;
