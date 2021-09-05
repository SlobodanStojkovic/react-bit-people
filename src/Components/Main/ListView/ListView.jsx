import "./ListView.css";
import { getEmail } from '../../../Services/getEmail';
import { getBirthday } from "../../../Services/getBirthday";

import React from 'react';

export const ListView = ({user, index}) => {
    
    let clName = '';
    let cName = '';

    if (user.gender === 'female') {
        cName = 'female'
    }

    if (index === 0){
        clName = 'first'
    }

    return (
        <div className={`list ${cName} ${clName}`}>
            <div className='picture'>
                <img src={user.picture.medium} alt='profile' />
            </div>
            <div className='data'>
                <p>{user.name.first} {user.name.last}</p>
                <p><i className="fa fa-envelope" aria-hidden="true"></i> email: {getEmail(user.email)}</p>
                <p><i className="fa fa-birthday-cake" aria-hidden="true"></i> {getBirthday(user.dob.date)}</p>
            </div>
        </div>
    )
}