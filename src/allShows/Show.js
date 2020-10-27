import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './Show.module.scss'
import { AiFillStar } from "react-icons/ai"



const Show = ({ name, avatar, id, rating }) => {
    return (
        <div className={style.wraper}>
            <Link to={`/info-show/${id}`}>
                <img className={style.card} src={avatar} alt="no image" />
                <h2>{name}</h2>
                <p>Rating: {rating} <span><AiFillStar /></span></p>
            </Link>
        </div>
    )
}

export default Show