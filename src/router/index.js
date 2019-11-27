import React from 'react';
import {H} from '../helper/all';
import {
  Switch,
  Route,
} from "react-router-dom";

import Welcome from '../components/welcome';
import About from '../components/about';
import Skill from '../components/skills';
import Project from '../components/projects';
import Contact from '../components/contact';

const { route_name: rn } = H;
export default class BasicRoutes extends React.Component {

	render() {
		return (
	        <Switch>
	          <Route exact path={ rn.home }>
	            <Welcome />
	          </Route>
	          <Route path={ rn.about }>
	            <About />
	          </Route>
	          <Route path={ rn.skills }>
	            <Skill />
	          </Route>
	          <Route path={ rn.projects }>
	            <Project />
	          </Route>
	          <Route path={ rn.contact }>
	            <Contact />
	          </Route>
	        </Switch>
		);
	}
}