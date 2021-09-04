import React from "react";
import { getUsers } from "../../Services/getUsers";


import "./Header.css";

export const Header = ({gridView}) => {
    const f = () => {
        return gridView = !gridView;
    }

    return (
        <div className='header'>
            <h1>Bit Persons</h1>
            <button onClick={f}>dada</button>
            <br />
            <button onClick={getUsers}><i className="fa-solid fa-user"></i>Refresh</button>
        </div>
    );
};
