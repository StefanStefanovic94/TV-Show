import React from "react"
import { FetchShows } from "../../services/Fetch"
import {Link} from "react-router-dom"
import style from "./Cast.module.scss"

class Cast extends React.Component {
    constructor() {
        super()
        this.state = {
            casts: []
        }
    }
    

    componentDidMount() {
        FetchShows(`${`http://api.tvmaze.com/shows/`}${this.props.id}/cast`)
            .then((response) => this.setState({
                casts: response
            }))
    }

    render() {
        return (
            <div className={style.cast}>
                <h2>Cast:</h2>
                {this.state.casts.map((cast, i) => {
                    if (i < 5) {
                        return (
                            <ul>
                                <li>{cast.person.name}</li>
                            </ul>
                        )
                    }
                }
                )}

                <Link to={`${/info-show/}${this.props.id}/cast`}>
                <h6>click here for more details</h6>
                </Link>

            </div>
        )
    }
}

export default Cast

// return (
//     this.state.shows.sort((a, b) => a.rating.average > b.rating.average ? -1 : 1).map((show, i) => {
//         // console.log(this.state.shows);
//         if (i < 52) {
//             return (
//                 <Col sm="10" md="5" lg="3">
//                     <Show
//                         key={show.id}
//                         avatar={show.image.medium}
//                         name={show.name}
//                         id={show.id}
//                         rating={show.rating.average}

//                     />
//                 </Col>
//             )
//         }
//     })

// )