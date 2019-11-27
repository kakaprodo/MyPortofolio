import React,{ Fragment } from 'react';
import {H} from '../helper/all';

const { $, 
	myInfo: { contact },
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
            <p className="card-title center"> My contacts and other links :</p>
            
            {
              Object.keys(contact).map((key, index) => {
                 return <Fragment key={key+'_contact'}>
	                 <p   className="title-simple">
	                    <strong>{ key }: </strong> 
	                 </p>
	                 <p   className="title-simple">{ contact[key] }</p>
                 </Fragment>
              })
            }
          </div>
         
        </div>
      </div>
   	);
  }
}