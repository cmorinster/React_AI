import React from 'react';
import { Link } from 'react-router-dom';
import Knight from '../Images/knighttransparent.png'
import Lion from '../Images/Lion.png'
import Dragon from '../Images/Dragon.png'

export default function Navbar({ loggedIn, logUserOut }) {

    return (
        <nav className="navbar navbar-expand-lg">
            
            <div className="container-fluid navSettings">
                
                <Link className="navbar-brand" to="/">RoboArt Rumble</Link>
                
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mr-auto justify-content-end">
                    <img src={Dragon} alt="Logo" className ="dragonLogo" />
                        
                        <Link className="nav-link" to="/">Home</Link>
                        <img src={Lion} alt="Logo" className ="lionLogo" />
                        
                    
                        {loggedIn ? (
                            <>
                            <Link className="nav-link" to="/create">Create A Character</Link>
        
                            <img src={Knight} alt="Logo" className ="knightLogo" />
                            <Link className="nav-link" to="/" onClick={() => logUserOut()}>Log Out</Link>
                            </>
                        ) : (
                            <>
                            <Link className="nav-link" to="/register">Register</Link>
                            
                            <img src={Knight} alt="Logo" className ="knightLogo" />
                            <Link className="nav-link" to="/login">Log In</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}