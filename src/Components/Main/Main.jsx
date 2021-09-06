import "./Main.css";
import React, { useEffect, useState } from 'react';
import { getUsers } from '../../Services/getUsers';
import { GridView } from './GridView/GridView';
import { ListView } from './ListView/ListView';

export const Main = ({gridView, users}) => {
    // let [users, setUsers] = useState([])

    

    let male = 0;
    let female = 0;

    if (users){
        users.forEach((user) => {
            if(user.gender === 'female'){
                female++
            } else {
                male++
            }
        })
    }

    if (gridView){
        return (
            <div className='main'>
                <p className='genderdata'>Male: {male} Female: {female}</p>
                {   
                    users.map((user, index) => {
                        return <GridView user={user} index={index}/>
                    })
                }
            </div>
        )
    } else {
        return (
            <div className='main'>
                <p className='genderdata'>Male: {male} Female: {female}</p>
                {   
                    users.map((user, index) => {
                        return <ListView user={user} index={index}/>
                    })
                }
            </div>
        )
    }

}