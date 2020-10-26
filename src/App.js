import React from 'react';
import AllShows from "./allShows/AllShows"
import style from "./App.module.scss"
import { Switch, Link, Route } from "react-router-dom"
import Header from "./Header/Header"
import InfoShow from "./allShows/InfoShow"
import SeasonsDetails from './allShows/seasons/seasonsDetails/SeasonsDetails';
import Episodes from './allShows/seasons/seasonsDetails/episodes/Episodes';
import CastDetails from './allShows/cast/castDetails/CastDetails';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <div className={style.wrap}>
          <Switch>

            <Route exact path="/" component={AllShows}></Route>

            <Route exact path="/info-show/:id" component={InfoShow}></Route>
            <Route exact path="/info-show/:id/seasons" component={SeasonsDetails}></Route>
            <Route exact path="/info-show/:id/:id/episodes" component={Episodes}></Route>
            <Route exact path="/info-show/:id/cast" component={CastDetails}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
