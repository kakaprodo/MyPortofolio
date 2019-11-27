import React from 'react';
import {H} from '../helper/all';
import { Link } from "react-router-dom";

const { route_name: rn, $, giveActive } = H;
export default class Nav extends React.Component
{
  constructor(props) {
    super(props);
  
    this.state = {
      menu_active:null
    };
  }

  componentDidMount() {
    H.setMenuActive(this);
  }
  render() {
    const { menu_active:ma } =this.state;
  
  	return (
       <div className="nav">
          <ul className="list-unstyled">
          	 <li className={giveActive(ma,rn.home)}> 
               <Link to={ rn.home } > 
                  <p> <i className="fa fa-home"></i> </p>
                  <span> Home </span>
                </Link> 
             </li>
          	 <li className={giveActive(ma,rn.about)}> 
               <Link to={ rn.about } >
                 <p> <i className="fa fa-address-card"></i> </p> 
                 <span> About </span>
                </Link> 
             </li>
          	 <li className={giveActive(ma,rn.skills)}> 
               <Link to={ rn.skills } >
                 <p> <i className="fa fa-book"></i> </p> 
                 <span> Skills </span>
               </Link> 
             </li>
          	 <li className={giveActive(ma,rn.projects)}> 
               <Link to={ rn.projects } >
                 <p> <i className="fa fa-umbrella"></i> </p> 
                 <span> Projects </span>
               </Link> 
             </li>
          	 <li className={giveActive(ma,rn.contact)}> 
               <Link to={ rn.contact } >
                 <p> <i className="fa fa-phone"></i> </p> 
                 <span> Contact </span> 
               </Link> 
             </li>
          	 
          </ul>
       </div>
  	);
  }
}