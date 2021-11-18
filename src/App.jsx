import React from 'react'
import Card from './components/Card'
import Form from './components/Form'

let initialState = {
    
}

class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        name: 'Steve',
        date: '01.01.91',
        agree: 'no',
        specials: 'no',
        option: 1,
      },
    ],
  }

  onItemAdded = (name, date, agree,  specials,  option) => {
    this.setState((state) => {
      const item = this.createItem(name, date, agree,  specials,  option)
      return { items: [...state.items, item] }
    })
  }
  maxId = 100;
  createItem(name, date, agree,  specials,  option) {
      console.log(name, date, agree,  specials,  option);
    return {
      id: ++this.maxId,
      name,
      date,
      agree,
      specials,
      option,
    }
  }
  render() {
    const { items } = this.state;
    return (
      <div className="container row">
        <Form onItemAdded={this.onItemAdded}/>
        <hr />
        <Card items={items}/>
      </div>
    )
  }
}

export default App
