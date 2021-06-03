/* eslint-disable no-unused-vars */
import '../../css/index.scss'
import Chatroom from '../../components/chatroom/Chatroom.jsx'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import FormInputField from '../../components/util/FormInputField.jsx'
import Typography from '@material-ui/core/Typography'
import heading from '../../assets/images/heading.jpg'

function Index () {
  const initState = {
    a: {
      name: 'a',
      value: '',
      hasError: false
    },
    b: {
      name: 'b',
      value: '',
      hasError: false
    },
    total: 0
  }
  const [state, setState] = useState(initState)
  const { a, b, total } = state
  function isValid (value) {
    return isNaN(value)
  }
  function handleChange (e) {
    const { name, value } = e.target
    const hasError = isValid(value)
    setState(prevState => {
      const prevValueObj = prevState[name]
      const updateState = {
        ...prevState,
        [name]: {
          ...prevValueObj,
          value,
          hasError
        }
      }
      return updateState
    })
  }
  function sum () {
    const { a, b } = state
    if (!a.hasError && !b.hasError) {
      setState(prevState => ({
        ...prevState,
        total: a.value + b.value
      }))
    }
  }
  return (
    <React.Fragment>
      <div>Welcome, this is the Homepage.</div>
      <div className="sum-input-container">
        <FormInputField
          id={a.name}
          name={a.name}
          label="A"
          value={a.value}
          handleChange={e => handleChange(e)}
          helperText={a.hasError ? 'Invalid input' : ''}
          error={a.hasError}
        />
        <FormInputField
          id={b.name}
          name={b.name}
          label="B"
          value={b.value}
          handleChange={e => handleChange(e)}
          helperText={b.hasError ? 'Invalid Input' : ''}
          error={b.hasError}
        />
      </div>
      <Typography variant="h1" component="h2">{total}</Typography>
      <Button variant="contained" color="primary" onClick={() => sum()}>Sum</Button>
      <div><a href="/posts.html">Post.html</a></div>
      <img src={heading} />
      <Chatroom />
    </React.Fragment>
  )
}

ReactDOM.render(<Index />, document.getElementById('index'))
