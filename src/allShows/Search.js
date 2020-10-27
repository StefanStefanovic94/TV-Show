import React from "react"
import { Link } from "react-router-dom"
import style from "./Search.module.scss"
import { FetchShows } from "../services/Fetch"
import Show from "./Show"
import Image from "../image/image"

// const Search = ({ searchedSeries, sortShows, value }) => {
//     const change = (event) => {
//         searchedSeries(event.target.value)
//     }
//     return (
//         <div >
//             <div>
//                 <input onChange={change}></input>
//             </div>
//             <div className={style.wrap}>
//                 {value === "" ? "" : sortShows.map((show, i) => (

//                     <ul className={style.list}>
//                         <Link to={`${`/info-show/`}${show.id}`}>
//                             <li><img src={show.image.medium} /> <h4>{show.name}</h4></li>
//                         </Link>
//                     </ul>

//                 ))}

//             </div>
//         </div>
//     )
// }
// export default Search

// https://api.tvmaze.com/search/shows?q=${str}`

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            search: [],
            value: ``
        }
    }


    searchedSeries = (event) => {
        let ancx = event.target.value
        this.setState({
            value: ancx
        })
    }
    // change = (event) => {
    //     this.searchedSeries(event.target.value);
    // }

    trying() {
        FetchShows(`${`http://api.tvmaze.com/search/shows?q=`}${this.state.value}`)
            .then((response) => this.setState({ search: response })
            );
    }

    render() {
        return (
            <div>

                {console.log(this.state.search)}
                <input onChange={this.searchedSeries} placeholder="search..."></input>
                {this.state.value ? this.trying() : null}
                <div className={style.parentList}>
                    {this.state.value === "" ? "" : this.state.search.map(show => (
                        <Link to={`/info-show/${show.show.id}`}>
                            <div className={style.list}>
                                <img className={style.image} src={show.show.image ? show.show.image.medium :  <Image/>} />
                                <h2 className={style.text}>{show.show.name}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}
export default Search

