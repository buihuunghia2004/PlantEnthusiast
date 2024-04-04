import React from 'react'
import { Provider } from 'react-redux';
import AppNavigation from './navigtion/AppNavigation';
import store from './redux/Store';


const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App

