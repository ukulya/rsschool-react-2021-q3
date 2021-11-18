import React from 'react'
import Card from './Card'

class Form extends React.Component {
  state = {
    id: '',
    name: '',
    date: '',
    agree: '',
    specials: '',
    option: '',
  }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  onDateChange = (e) => {
    this.setState({
      date: e.target.value,
    })
  }

  onAgreeChange = (e) => {
    console.log('checkbox checked:', (e.target.checked));
    this.setState({
      agree: e.target.checked ? 'yes' : 'no',
    })
  }

  onSpecialsChange = (e) => {
    this.setState({
        specials: e.target.checked ? 'yes' : 'no',
    })
  }

  onOptionChange = (e) => {
    this.setState({
        option: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { name,date,agree,specials,option } = this.state
    this.setState({
         name: '' ,
         agdateree: '',
         date: '',
         specials: '',
         option: '',
        })
    const cb = this.props.onItemAdded || (() => {})
    cb(name,date,agree,specials,option)
  }

  render() {
    return (
      <form className="w-25" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Текст"
          className="form-control"
          value={this.state.name}
          onChange={this.onNameChange}
        //onChange={this.handleInputChange}
        />
        <input type="date" placeholder="дата" className="form-control" value={this.state.date}
          onChange={this.onDateChange}/>
        <label htmlFor="">
          <input type="checkbox" placeholder="" value={this.state.agree}
          onChange={this.onAgreeChange}/>
          согласен на обработку данных
        </label>
        <br />
        <label htmlFor="">
          <input type="radio" name="radio" value="yes" value={this.state.specials}
          onChange={this.onSpecialsChange}/>
          Yes
          <input type="radio" name="radio" value="no" value={this.state.specials}
          onChange={this.onSpecialsChange}/>
          No хочу получать уведомления об акциях
        </label>
        <br />
        <label htmlFor="select">Choose</label>
        <select id="select" className="form-control" value={this.state.option}
          onChange={this.onOptionChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button type="submit" className="btn btn-primary">submit</button>
      </form>
    )
  }
}

export default Form
