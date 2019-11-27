import React from 'react';
import {H} from '../helper/all';

const { $, 
	myInfo: { projects },
	animeRand } = H;
export default class Projects extends React.Component {

  componentDidMount(){
	  $('.app-opacity')[animeRand()](2000);
	  
  }

  render() {
   return (
      <div className="col xl10 l10 m10 s12 push-xl1 push-l1 push-m1 project-presentation  app-opacity pad10">
        <div className="carde">
          <div className="card-content">

           {
           	 Object.keys(projects).map((key, index ) => {
           	 	return <div  key={ index+'_ project' } className="col xl6 l6 m12 s12 project-list">
			            <p style={{marginBottom:'2px'}} className="card-title"> { key }</p>
			            <p  className="title-simple">
			              { projects[key].description }.
			           </p>
			           <p>
			              <a target="_blanck" className="btn" href={ projects[key].url } >
			              Go to the project
			              </a>   
			            </p>
           	 	</div>
           	 })
           }
          </div>
        </div>
      </div>
   	);
  }
}