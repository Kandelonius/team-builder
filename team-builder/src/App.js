import React, { useState } from 'react'
import { v4 as uuid } from 'uuid' // GROSS
import Team from './TeamMember'
import TeamForm from './TeamForm'

const initialTeamList = [
  // 👉 the shape of the actual team member
  {
    id: uuid(),
    username: 'Gunhaver',
    email: 'playsets@toys.com',
    role: 'Leader',
  },
]

// 👉 the shape of the state that drives the form
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  role: '',
}

export default function App() {
  const [teams, setTeams] = useState(initialTeamList)

  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const [formValues, setFormValues] = useState(initialFormValues) // fix this using the state hook

  const onInputChange = evt => {
    // 🔥 STEP 4 - IMPLEMENT A CHANGE HANDLER
    // which can change the state of inputs of type text

    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    // c) set a new state for the whole form
  }

  const onSubmit = evt => {
    // 🔥 STEP 5 - IMPLEMENT A SUBMIT HANDLER

    // a) don't allow the browser to reload!
    // b) make a new team object with an id, GROSS
    //    set up the new team with the correct attributes
    //    using the information inside the state of the form
    // c) update the list of teams in state with the new team
    // d) optionally clear the form
  }

  return (
    <div className='container'>
      <header><h1>Teams App</h1></header>
      {
        teams.map(team => {
          return (
            <Team key={team.id} details={team} />
          )
        })
      }

      <TeamForm
      // 🔥 STEP 2 - THE FORM WANTS ITS FOOD!!!!
      // check implementation of TeamForm
      // to see what props it expects
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      />
    </div>
  )
}

// 🔥 STEP 6 - DO STEPS 3, 4 & 5 FOR THE DROPDOWN
// 🔥 STEP 7 - DO STEPS 3, 4 & 5 FOR THE CHECKBOXES