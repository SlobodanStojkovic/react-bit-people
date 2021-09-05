import "./Main.css";
import React, { useEffect, useState } from 'react';
import { getUsers } from '../../Services/getUsers';
import { GridView } from './GridView/GridView';
import { ListView } from './ListView/ListView';

export const Main = (props) => {
    let [users, setUsers] = useState([])

    useEffect(() =>{
        /* getUsers()
            .then(users => setUsers(users)) */
            let users = props.users;
            setUsers(users)
    }, [])

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

    if (props.GridView){
        return (
            <div className='main'>
                ovo je gridview
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