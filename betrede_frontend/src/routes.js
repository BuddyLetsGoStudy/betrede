import React from 'react'
import { Route } from 'react-router-dom'

import TagsList from './components/TagsList'
import TagDetail from './components/TagDetail'
import SpacesList from './components/SpacesList'
import SpaceDetail from './components/SpaceDetail'
import Login from './components/Login'
import Signup from './components/Signup'
import PersonalSpaces from './components/PersonalSpaces'
import PersonalArtObjects from './components/PersonalArtObjects'
import Scene from './components/Scene'


const BaseRouter = () => (
  <div>
    <Route exact path='/tags/' component={TagsList} />
    <Route exact path='/tags/:tagID/' component={TagDetail} />
    <Route exact path='/' component={SpacesList} />
    <Route exact path='/spaces/:spaceID' component={SpaceDetail} />
    <Route exact path='/login/' component={Login} />
    <Route exact path='/signup/' component={Signup} />
    <Route exact path='/my/spaces' component={PersonalSpaces} />
    <Route exact path='/my/artobjects' component={PersonalArtObjects} />
    <Route exact path='/scene/:spaceID' component={Scene} />
  </div>
)

export default BaseRouter
