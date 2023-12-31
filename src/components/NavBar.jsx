import React from 'react';
import { Link } from 'react-router-dom';
import Knight from '../Images/knighttransparent.png'
import Lion from '../Images/Lion.png'
// import Dragon from '../Images/Dragon.png'
import Door from '../Images/DogDoor.png'
import House from '../Images/House.png'

export default function Navbar({ loggedIn, logUserOut }) {

    return (
        <nav className="navbar navbar-expand-lg">
            
            <div className="container-fluid navSettings">
                
                <Link className="navbar-brand nameFont" to="/">RoboArt <br></br>Rumble</Link>
                
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <div className="col justify-content-center text-center aiIcons">
                        <Link to="/">
                        <img src={House} alt="Logo" className ="houseLogo" />
                        </Link>  
                        <Link className="nav-link" to="/">Home</Link>
                        </div>
                            
                        
                    
                        {loggedIn ? (
                            <>
                                <div className="col justify-content-center text-center aiIcons">
                                <Link to="/create">
                                <img src={Lion} alt="Logo" className ="lionLogo" />
                                </Link>
                                <Link className="nav-link" to="/create">Create a Character</Link>
                                </div>
                                <div className="col justify-content-center text-center aiIcons">
                                <Link to="/" onClick={() => logUserOut()}>
                                <img src={Door} alt="Logo" className ="doorLogo" />
                                </Link>
                                <Link className="nav-link" to="/" onClick={() => logUserOut()}>Log Out</Link>
                                </div>
                            </>
                        ) : (
                            <>
                            <div className="col justify-content-center text-center aiIcons">
                            <Link to="/register">
                            <img src={Knight} alt="Logo" className ="knightLogo" />
                            </Link>
                            <Link className="nav-link" to="/register">Register</Link>
                            </div>
                            <div className="col justify-content-center text-center aiIcons" id="loginText">
                            <Link to="/login">
                            <img src={Door} alt="Logo" className ="doorLogo" />
                            </Link>
                            <Link className="nav-link" to="/login">Log In</Link>
                            </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}