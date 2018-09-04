import React, { Component } from 'react'

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

  render () {
    return (
      <div>
        <h1>Hello, Daniel</h1>

        <input value={this.state.item} onChange={this.handleInput} />
      </div>
    )
  }
}

export default TodoForm
