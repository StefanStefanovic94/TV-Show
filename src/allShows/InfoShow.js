import React from "react"
import { FetchShows } from "../services/Fetch"
import Seasons from "./seasons/Seasons";
import style from "./InfoShow.module.scss"
import Cast from "../allShows/cast/Cast"

class InfoHero extends React.Component {
    constructor() {
        super()
        this.state = {
            show: null,
            sesone: []
        }
    }
    componentDidMount() {
        FetchShows(`${`http://api.tvmaze.com/shows/`}${this.props.match.params.id}`)
            .then((response) => this.setState({ show: response }));

    }

    renderShow = () => {
        return (
            <div>
                <div>
                    <img src={this.state.show.image.medium} key={this.state.show.id} />
                </div>
            </div>
        )
    }


    render() {
        return (
            <div className={style.wrap}>
                <div>
                    {this.state.show ? this.renderShow() : null}
                </div>
                <div className={style.seasons}>
                    {this.state.show ? <Seasons id={this.state.show.id} /> : null}
                </div>
                <div>
                    {this.state.show ? <Cast id={this.state.show.id} /> : null}
                </div>


                {console.log(this.state.show)}
            </div>
        )
    }
}
export default InfoHero