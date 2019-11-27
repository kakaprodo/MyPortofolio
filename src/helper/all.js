import $ from 'jquery';
import routeName from './route_name';
import myInfo from './mockData';


export const H = {
	$:$,
	route_name:routeName,
	myInfo: myInfo,
	random: (min,max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	animeRand: () => {
		const animations = ['fadeIn', 'show', 'slideDown'];
		return animations[H.random(0,2)];
	},
	setMenuActive(model){
	    $(window).on('hashchange', (e) => {
	      const hash = window.location.hash.split('#');
	      if (model) {
	      	model.setState({menu_active:hash[1]});
	      }
	    });
	    let hash = window.location.hash.split('#');
	    if (model) return model.setState({menu_active:hash[1]});
	},
	giveActive(currentHash,expectHash){//browser has
      if(currentHash === null) return 'menu-active';
      console.log(currentHash.toLowerCase() , expectHash.toLowerCase(),currentHash.toLowerCase() === expectHash.toLowerCase());
      return currentHash.toLowerCase() === expectHash.toLowerCase()?'menu-active':'';
	}

}