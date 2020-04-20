import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({user}) => {
    return (
        <div className='card'>
            <img src={user.avatar_url} alt={user.login} className='card-img-topx'/>
            <div className='card-body'>
                <h5 className='card-title'>{user.login}</h5>
                <Link to={'/profile/'+user.login} className='btn btn-primary'>Открыть</Link>
            </div>
        </div>
    )
}
export default Card;