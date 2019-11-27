import React from 'react';
import H from '../helper/all'
const { $ } = H;
export default class Welcome extends React.Component{
    
    componentDidMount(){
      $('.title-known').fadeIn(3000);
      $('.wlm_img img').show(2000)
    }


	render() {
      return (
           
             <div className="col xl8 l9 m10 s12 push-xl2 push-l2 push-m1 center wlm-presentation">
               <div className="center wlm_img">
                  <img src="/img/me.jpg" alt="" />
               </div>
               <p className="title-known">Promesse Kayenga.</p>
               <p className="title-known"> Php and JavaScript Engineer. </p>
               <p className="title-known">Web, Mobile.</p>
             </div>
             
        );
	}
}