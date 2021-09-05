import React from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../Services/getUsers";


import "./Header.css";

export const Header = ({ gridView, onRefresh }) => {

    const changeToGridButton = () => {
        return gridView = !gridView;
    }

    return (
        <div className='header'>
            <Link to="/home"><h1>Bit People</h1></Link>
            <Link to="/about"> <span className="aboutHeader">About</span> </Link>
            <button className="refreshButton" onClick={onRefresh}><i className="far fa-redo-alt"></i>Refresh</button>
            <button className="gridButton btn-info" onClick={changeToGridButton}><i className="fas fa-grip-horizontal"></i></button>
        </div>
    );
};
