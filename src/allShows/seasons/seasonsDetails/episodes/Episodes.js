import React from "react"
import { FetchShows } from "../../../../services/Fetch"
import style from "./Episodes.module.scss"

class Episodes extends React.Component {
    constructor() {
        super()
        this.state = {
            episodes: null
        }

    }
    componentDidMount() {
        FetchShows(`${`http://api.tvmaze.com/seasons/`}${this.props.match.params.id}/episodes`)
            .then(console.log(this.props.match.params.id))
            .then((response) => this.setState({
                episodes: response
            })
            )
    }

    renderEpisodes = () => {
        return (
            <div className={style.wrap}>
                {this.state.episodes.map(episode => (
                    <div className={style.card}>
                        <img src={episode.image ? episode.image.medium : "no image"} />
                        <h2>{episode.number}. {episode.name}</h2>
                    </div>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div className={style.wrap}>
                {this.state.episodes ? this.renderEpisodes() : null}
            </div>
        )
    }
}
export default Episodes