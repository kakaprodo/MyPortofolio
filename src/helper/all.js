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
	}

}