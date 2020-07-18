import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NewPost from '../pages/NewPost'
import PostList from '../pages/PostList'

export default (props) => (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path="/register" component={ Register } />
        <Route path="/login" render={(routeComponentProps) => {
      return <Login 
                {...routeComponentProps}
                currentUser={props.currentUser}
                storeUser={props.storeUser}
            />
    }}/>
        <Route path="/posts/new" component={ NewPost } />
        <Route path='/post' component={ PostList } />
    </Switch>
)