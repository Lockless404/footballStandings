import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Table = () => {
  return (
    <div className='App'>
      <Header />
      <hr />
      <h1>Blegh</h1>
      <Link to="/home">Back</Link>
    </div>
  )
}

export default Table
