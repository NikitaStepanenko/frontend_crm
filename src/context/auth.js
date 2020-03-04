// /*import { createContext, useContext } from 'react';

// export const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }*/
// import { createContext, useContext } from 'react';

// export const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: localStorage.getItem('tokens') || 0,
    login:"",
    isAdmin:false
  }
  toggleAuth = (value,mail,role) => {
    this.setState({ isAuthenticated: value,login:mail,isAdmin:role});
  }
  render() {
    return (
      <AuthContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;