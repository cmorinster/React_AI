import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="card aboutCard">
    <div className="card-body">
    <h5 className="card-title">RoboArt Rumble</h5>
    <br></br>
    <h6 className="card-subtitle mb-2 text-muted">About the App:</h6>
    <br></br>
    <p className="card-text">Welcome to the RoboArt Arena where characters that you create using AI art images are pitted against against the reigning champion in a fierce battle. Then when the battles over chatGPT will narrate the great tale.  And if you win your character will be featured on the home page!  To begin register and login to start creating characters!  Good Luck!</p>
        <Link className='card-link' to={`/`}>Home</Link>
        <Link className='card-link' to={`/register`}>Register</Link>
        <Link className='card-link' to={`/login`}>Login</Link>
  </div>
</div>

      
   
  )
}
