import React from 'react'

const List = props => (
  <ul>
    {
      props.itemList.map(item => <li key={item.toString()}>{item} <button onClick={props.handleDone}>Done</button></li>)
    }
  </ul>
)

export default List
