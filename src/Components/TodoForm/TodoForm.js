import React, { Component } from 'react'
import List from '../List/List';

class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: '',
      itemList: []
    }
  }

  handleInput = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      item: '',
      itemList: [...this.state.itemList, this.state.item]
    })
  }

  render () {
    return (
      <div>
        <h1>Hello, Daniel</h1>


        <form onSubmit={this.onSubmit}>
      
          <input value={this.state.item} onChange={this.handleInput} />
          <button>Create</button>
        </form>

        <List itemList={this.state.itemList} />
      </div>
    )
  }
}

export default TodoForm
