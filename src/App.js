
import React, { useState } from 'react'
import { withRouter} from 'react-router-dom'
import Routes from './config/routes'
import Header from './components/Header'
import Footer from './components/Footer'
import UserModel from './models/user'


function App(props) {
  const [currentUser, setCurrentUser] = useState({currentUser: localStorage.getItem('uid')})

  const storeUser = (userId) =>{
    setCurrentUser(userId)
    localStorage.setItem('uid', userId)
  }

  const logout = (event) => {
    event.preventDefault()

    localStorage.removeItem('uid')
    UserModel.logout()
      .then(res => {
        console.log(res)
        setCurrentUser(null)
        props.history.push('/login')
      })
  }

  return (
    <div className="App">
      <Header currentUser={currentUser}
        logout={logout}
      />
      <Routes 
        currentUser={currentUser}
        storeUser={storeUser}
      />
      <Footer />
    </div>
  );
}

export default withRouter(App) 
