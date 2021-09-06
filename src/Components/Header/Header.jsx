import React from "react";

import { getUsers } from "../../Services/getUsers";

import "./Header.css";



export const Header = ({gridView, buttonClick, refresh}) => {

    let view = gridView ? 'grid' : 'list';

    return (
        <div className='header'>
            <h1>Bit Persons</h1>
            <button onClick={buttonClick}>{view}</button>
            <br />
            <button onClick={refresh}><i class="fas fa-redo-alt"></i>Refresh</button>
        </div>
    );
};
