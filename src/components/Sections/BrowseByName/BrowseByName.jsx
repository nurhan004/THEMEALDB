import React from "react";
import { useNavigate } from "react-router-dom";
import "./BrowseByName.css";

function BrowseByName() {
    const navigate = useNavigate();
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <div className="browseContainer">
            <h2>Browse By Name</h2>
            <div className="browseContent">
                    {letters.map((letter, index) => (
                        <div 
                            key={letter} 
                            className="letter-link" 
                            onClick={() => navigate(`/browse/${letter}`)}
                        >
                            <h1>{letter}/</h1>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default BrowseByName;
