import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'
import ThemeContext from './context/ThemeContext'

import Home from './components/Home'
import Business from './components/Business'
import Entertainment from './components/Entertainment'
import General from './components/General'
import Science from './components/Science'
import Health from './components/Health'
import Sports from './components/Sports'
import Technology from './components/Technology'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.toggleTheme}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/business" component={Business} />
          <Route exact path="/entertainment" component={Entertainment} />
          <Route exact path="/general" component={General} />
          <Route exact path="/science" component={Science} />
          <Route exact path="/health" component={Health} />
          <Route exact path="/sports" component={Sports} />
          <Route exact path="/technology" component={Technology} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
