import React from 'react'

function TeamForm(props) {
  // THESE ARE THE **EXACT PROPS** TeamForm EXPECTS!
  const {
    values,
    onInputChange,
    onSubmit,
  } = props

  return (
    <form className='team container'>
      <h2>Team Form</h2>
      {/* ////////// TEXT INPUTS ////////// */}
      <label>Username:&nbsp;
      <input
          // 🔥 STEP 3A - THIS INPUT WANTS VALUE & CHANGE HANDLER!
          // Inputs render what they're told
          // Their current value ultimately comes from app state
          // At each keystroke, a change handler should fire
          value={values.username}
          onChange={onInputChange}
          name='username'
          type='text'
        /></label>
      <label>Email:&nbsp;
      <input
          // 🔥 STEP 3B - THIS INPUT WANTS VALUE & CHANGE HANDLER!
          value={values.email}
          onChange={onInputChange}
          name='email'
          type='text'
        /></label>

        <label>Role:&nbsp;
          <input
          value={values.role}
          onChange={onInputChange}
          name='role'
          type='text'
          />
        </label>

      {/* 🔥 STEP 3C - THIS BUTTON WANTS A HANDLER! */}
      
      <button onClick={onSubmit}> submit</button>
    </form>
  )
}

export default TeamForm