import React from "react"
import { Link } from "react-router-dom"
import { FetchShows } from "../../../services/Fetch"
import style from "./SeasonsDetails.module.scss"

class SeasonsDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            seasons: null
        }
    }

    componentDidMount() {
        FetchShows(`${`http://api.tvmaze.com/shows/`}${this.props.match.params.id}/seasons`)
            .then((response) => this.setState({ seasons: response })
            )
    }

    renderSeasons = () => {
        return (
            <div className={style.wrap}>
                {this.state.seasons.map(season => (
                    <div className={style.card}>
                        <img src={season.image ? season.image.medium : "no image"} />
                        <h4>Seasons: {season.number}</h4>
                        <Link to={`${`/info-show/`}${this.props.match.params.id}/${season.id}/episodes`}>
                            <h3 className={style.episodes}>Episodes</h3>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div>{this.state.seasons ? this.renderSeasons() : null}</div>
        )
    }
}
export default SeasonsDetails

