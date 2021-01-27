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
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SinglePost from './pages/SinglePost'
import Event from './pages/Event'




class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router >
          <NavBar></NavBar>
          <Container >
            <Route exact path='/' component={Home} />
            <Route exact path='/event' component={Event} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path="/posts/:postId" component={SinglePost} />
          </Container>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
