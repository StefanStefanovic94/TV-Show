import React from "react"
import { Link } from "react-router-dom"
import style from "./Search.module.scss"

const Search = ({ searchedSeries, sortShows, value }) => {
    const change = (event) => {
        searchedSeries(event.target.value)
    }
    return (
        <div >
            <div>
                <input onChange={change}></input>
            </div>
            <div className={style.wrap}>
                {value === "" ? "" : sortShows.map((show, i) => (

                    <ul className={style.list}>
                        <Link to={`${`/info-show/`}${show.id}`}>
                            <li><img src={show.image.medium} /> <h4>{show.name}</h4></li>
                        </Link>
                    </ul>

                ))}

            </div>
        </div>
    )
}
export default Search