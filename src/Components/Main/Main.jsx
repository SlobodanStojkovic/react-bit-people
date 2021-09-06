import "./Main.css";
import React, { useEffect, useState } from 'react';
import { getUsers } from '../../Services/getUsers';
import { ListView } from './ListView/ListView';
import { GridView } from "./GridView/GridView";
import loadingImage from "../Main/assets/loadingScreen.gif";
import noUsersImage from "../Main/assets/noUsersImage.png";

export const Main = (props) => {
    let [users, setUsers] = useState([])

    useEffect(() => {
        /* getUsers()
            .then(users => setUsers(users)) */
        let users = props.users;
        setUsers(users)
    }, [])

    let male = 0;
    let female = 0;

    if (users) {
        users.forEach((user) => {
            if (user.gender === 'female') {
                female++
            } else {
                male++
            }
        })
    }


    if (users.length < 14 && props.inputValue.length < 1) {
        return (
            <div>
                <img className="loadingImage" src={loadingImage} alt="loading..." />
            </div>
        )

    } else if (users.length < 1 && props.inputValue.length > 0) {
        return (
            <div>
                <img className="noUsersImage" src={noUsersImage} alt="no users..." />
                <p className="noMatch">We couldnt't find any people matching your search</p>
            </div>
        )
    } else {
        if (props.gridView) {
            return (
                <div className='gridmain'>
                    <p className='genderdata mb-0'>Male: {male} Female: {female}</p>
                    {
                        users.map((user, index) => {
                            return <GridView user={user} index={index} key={index}/>
                        })
                    }
                </div>
            )
        } else {
            return (
                <div className='main'>
                    <p className='genderdata mb-0 '>Male: {male} Female: {female}</p>
                    {
                        users.map((user, index) => {
                            return <ListView user={user} index={index} key={index}/>
                        })
                    }
                </div>
            )
        }
    }
}
