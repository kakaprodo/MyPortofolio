import React from 'react';
import {H} from '../helper/all';

const { $, myInfo: { identity: me, education } ,animeRand } = H;
export default class About extends React.Component {

  componentDidMount(){
	  $('.app-opacity')[animeRand()](2000);
	  
  }
  // componentWillUnmount(){
  // 	$('.app-opacity').hide('explode');
  // }

  render() {
   return (
         <div className="col xl8 l9 m10 s12 push-xl2 push-l2 push-m1 abt-presentation app-opacity">
	           <div className="center abt_img col xl4 l4 m12 s12" >
	              <img className="responsive-img hide-show" src={H.APP_PATH+'img/me.jpg'} alt="" />
	           </div>
	           <div className="abt-info col xl8 l8 m12 s12 fadeIn">
	           	   <p className="title-known">{ me.my_introduction }.</p>
	           	   <p className="title-simple"> As fun fact, i like { me.fun_fact }.</p>
		           <p className="title-simple"><strong>Full name</strong> : { me.firstname } { me.lastname } { me.surname } /{ me.nickname }</p>
                 <div className="abt-education">
                 	 <p className="title-simple"> <strong>Education :</strong></p>
                 	 <ul>
                 	 	{
                 	 	  Object.keys(education).map((key, index) => {
                           return <li key={ index+'_education' }>{ key } : { education[key] } </li>
                 	 	  })
                 	 	}
                 	 </ul>
                 </div>
                 <p className="title-simple"><strong>Current Address</strong> : { me.address }</p>
	           </div>
         </div>
   	);
  }
}