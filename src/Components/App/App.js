import React, { Component } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>To-do List</h1>
        </header>
        <TodoForm />
      </div>
    )
  }
}

export default App
