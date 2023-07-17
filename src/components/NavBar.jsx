import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ loggedIn, logUserOut }) {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">RoboArt Rumble</Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mr-auto">
    
                        <Link className="nav-link" to="/">Home</Link>
                    
                        {loggedIn ? (
                            <>
                            <Link className="nav-link" to="/create">Create A Character</Link>
                            <Link className="nav-link" to="/" onClick={() => logUserOut()}>Log Out</Link>
                            </>
                        ) : (
                            <>
                            <Link className="nav-link" to="/register">Register</Link>
                            <Link className="nav-link" to="/login">Log In</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}