import React from 'react';
import H from '../helper/all';
import { Link } from "react-router-dom";

const { route_name: rn } = H;
export default class Nav extends React.Component
{
  render() {
  	return (
       <div className="nav">
          <ul className="list-unstyled">
          	 <li> 
               <Link to={ rn.home } > 
                  <p> <i className="fa fa-home"></i> </p>
                  <span> Home </span>
                </Link> 
             </li>
          	 <li> 
               <Link to={ rn.about } >
                 <p> <i className="fa fa-address-card"></i> </p> 
                 <span> About </span>
                </Link> 
             </li>
          	 <li> 
               <Link to={ rn.skills } >
                 <p> <i className="fa fa-book"></i> </p> 
                 <span> Skills </span>
               </Link> 
             </li>
          	 <li> 
               <Link to={ rn.projects } >
                 <p> <i className="fa fa-umbrella"></i> </p> 
                 <span> Project </span>
               </Link> 
             </li>
          	 <li> 
               <Link to={ rn.motivation } >
                 <p> <i className="fa fa-plug"></i> </p> 
                 <span> Motivation </span> 
               </Link> 
             </li>
          	 
          </ul>
       </div>
  	);
  }
}