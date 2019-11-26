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
           <div className="welcome col s12">
             <div className="darken col s12"> 
                 <div className="col xl8 l9 m10 s12 push-xl2 push-l2 push-m1 center wlm-presentation">
                   <div className="center wlm_img">
                      <img src="/img/me.jpg" />
                   </div>
                   <p className="title-known">I am Promesse Kayenga.</p>
                   <p className="title-known"> Software Developer. </p>
                   <p className="title-known">Web, Mobile.</p>
                 </div>
             </div>

           </div>
        );
	}
}