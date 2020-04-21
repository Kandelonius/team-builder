import React from 'react'

function Team({ details }) {
  if (!details) {
    return <h3>Working fetching your team&apos;s details...</h3>
  }
  return (
    <div className='team container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
    </div>
  )
}
export default Team