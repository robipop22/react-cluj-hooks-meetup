import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import ClassButton from './classComponent'
import FunctionButton from './functionComponent'
import StateClassButton from './classComponentWithState'

/// CLASS COMPONENTS
import ClassCounter from './Components/Counter'
import HoverBtn from './Components/Button'

// HOOKS

// useState
import HookCounter from './HooksComponens/Counter'
import MultipleStates from './HooksComponens/MultipleStates'
import HookHoverBtn from './HooksComponens/Button'

// useEffect
import EffectCounter from './EffectComponents/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className={'App-logo'} alt={'react-logo'} src={logo} />
          <h2>React Cluj</h2>
          <h3>Hooks Meetup</h3>
          {/* <ClassButton text="I'm a class button" />
          <FunctionButton text="I'm a function button" />
          <StateClassButton text="I'm a function button" /> */}
          {/* <HoverBtn /> */}

          {/* <ClassCounter />
          <HookCounter /> */}
          {/* <MultipleStates /> */}
          {/* <HookHoverBtn /> */}

          {/* <EffectCounter /> */}
        </header>
      </div>
    )
  }
}

export default App
