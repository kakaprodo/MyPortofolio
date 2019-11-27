import React from 'react';
import {H} from '../helper/all';

const { $, 
	myInfo: { technical_skills: { proficient, familiar_with }, 
	key_strengths: [firstK, secongK] },
	animeRand } = H;
export default class Skills extends React.Component {

  componentDidMount(){
	  $('.app-opacity')[animeRand()](2000);
	  
  }

  render() {
   return (
      <div className="col xl8 l9 m10 s12 push-xl2 push-l2 push-m1 skills-presentation  app-opacity pad10">
        <div className="carde">
          <div className="card-content">
            <p className="card-title center"> Technical Skills :</p>
            <p  className="title-simple">
              { proficient } { familiar_with }.
           </p>
          </div>
          <div className="card-content">
           <p className="card-title center"> Key Strengths :</p>
           <p  className="title-simple">
              { firstK } { secongK }.
           </p>
           
          </div>
        </div>
      </div>
   	);
  }
}