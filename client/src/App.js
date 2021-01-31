import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import './App.css';

import { AuthProvider } from './context/auth'
import AuthRoute from './util/AuthRoute'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Event from './pages/Event'
import SinglePost from './pages/SinglePost'
import Bookmark from './pages/Bookmark'
import Cart from './pages/Cart'
import Profile from './pages/Profile'

import NavBar from './components/NavBar'
import Footer from './components/Footer'



class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router >
          <NavBar></NavBar>
          <Container >
            <br></br>
            <br></br>
            <br></br>
            <Route exact path='/' component={Home} />
            <Route exact path='/event' component={Event} />
            <Route exact path='/bookmark' component={Bookmark} />
            <Route exact path='/cart' component={Cart} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path="/posts/:postId" component={SinglePost} />
            <Route exact path="/profile" component={Profile} />
          </Container>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
