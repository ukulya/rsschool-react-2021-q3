import React from 'react'

const Card = ({ items }) => {
  const elements = items.map((item) => {
    const { id, name, date, agree, specials, option } = item
    return (
      <div key={id} className="card w-25">
        <div className="">Name - {name}</div>
        <div className="">Date - {date}</div>
        <div className="">Agree - {agree}</div>
        <div className="">Specials - {specials}</div>
        <div className="">Option - {option}</div>
      </div>
    )
  })

  return <div className="todo-list row">{elements}</div>
}

export default Card
