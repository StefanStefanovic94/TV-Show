import React from "react"
import { Link } from "react-router-dom"
import { FetchShows } from "../../services/Fetch"

class Seasons extends React.Component {
    constructor() {
        super()
        this.state = {
            seasons: []
        }
    }

    componentDidMount() {
        FetchShows(`${`http://api.tvmaze.com/shows/`}${this.props.id}/seasons`)
            .then((response) => this.setState({ seasons: response }))

    }


    render() {

        return (

            <div>
                <div>
                    <h2>Seasons ({this.state.seasons.length})</h2>
                </div>
                <div>
                    {this.state.seasons.map(season => (

                        <ul>
                            <li>{season.premiereDate} ; {season.endDate}</li>
                        </ul>

                    ))}
                </div>
                <Link to={`${/info-show/}${this.props.id}/seasons`}>
                    <h6>...more details about season</h6>
                </Link>
                {console.log(this.state.seasons)}
            </div>
        )
    }
}

export default Seasons