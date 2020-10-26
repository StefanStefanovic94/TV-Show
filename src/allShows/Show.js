import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './Show.module.scss'



const Show = ({ name, avatar, id, rating }) => {
    return (
        <div className={style.wraper}>
            <Link to={`/info-show/${id}`}>
                <img className={style.card} src={avatar} alt="no image"/>
                <h2>{name}</h2>
                <p>Rating: {rating}</p>
            </Link>
        </div>
    )
}

export default Show