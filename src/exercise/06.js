// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [value, setValue] = React.useState('')

  const onChange = event => {
    const value = event.target.value
    setValue(value.toLowerCase())
  }

  const onSubmit = event => {
    event.preventDefault()
    onSubmitUsername(value)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input onChange={onChange} value={value} id="username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
