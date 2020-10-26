import React from "react"
import Show from "./Show"
import { Container } from "react-bootstrap"
import style from './AllShows.module.scss'
import { Col } from "react-bootstrap"
import { FetchShows } from "../services/Fetch"
import "./AllShowsLoading.css"
import Search from "./Search"






class AllShows extends React.Component {
    constructor() {
        super()
        this.state = {
            shows: [],
            sortShows: [],
            value: ''
        }
    }

    componentDidMount() {
        FetchShows("http://api.tvmaze.com/shows")
            .then((data) => this.setState({ shows: data }))
    }

    searchedSeries = (textInput) => {
        const newShow = this.state.shows.filter((show) => {
            return show.name.toLowerCase().includes(textInput.toLowerCase())
        })
        this.setState({
            value: textInput,
            sortShows: newShow
        })
    }


    render() {
        return (
            <div >

                <div>
                    <Search
                        searchedSeries={this.searchedSeries}
                        sortShows={this.state.sortShows}
                        value={this.state.value}
                    />
                </div>
                <div className={style.check}>
                    {this.state.shows.sort((a, b) => a.rating.average > b.rating.average ? -1 : 1).map((show, i) => {
                        console.log(this.state.shows);
                        if (i < 52) {
                            return (
                                <Col sm="10" md="5" lg="3">
                                    <Show
                                        key={show.id}
                                        avatar={show.image.medium}
                                        name={show.name}
                                        id={show.id}
                                        rating={show.rating.average}

                                    />
                                </Col>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}
export default AllShows
