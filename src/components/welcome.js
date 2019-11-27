import React from 'react';
import {H} from '../helper/all';

const { $, myInfo: { identity: me }, animeRand } = H;
export default class Welcome extends React.Component{
    
    componentDidMount(){
      $('.app-opacity')[animeRand()](2000);
      
    }


	render() {
      return (
           
             <div className="col xl8 l9 m10 s12 app-opacity push-xl2 push-l2 push-m1 center wlm-presentation">
               <div className="center wlm_img">
                  <img src="/img/me.jpg" alt="" />
               </div>
               <p className="title-known"> { me.surname } { me.lastname }.</p>
               <p className="title-known"> { me.title }. </p>
               <p className="title-known"> { me.platform }.</p>
             </div>
             
        );
	}
}