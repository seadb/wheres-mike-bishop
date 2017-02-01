import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Layout from './components/layout'
//import Contact from '../../contact'
//<Route path='contact' component={Contact} />
import Home from './home'
import AboutUs from './about-us'
import Contact from './contact'

const Routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={Home} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/contact' component={Contact} />
    </Route>
  </Router>
)
export default Routes
