import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import configureStore from "./redux/store/configureStore";

import HomePage from "./components/Pages/Home";
import ArtistsPage from "./components/Pages/Artists";
import ArtworksPage from "./components/Pages/Artworks";
import NotesPage from "./components/Pages/Notes";
import { saveStateToLS } from './redux/store/localstorage';

const store = configureStore();

store.subscribe(() => {
  saveStateToLS(store.getState());
})

class App extends Component {
  debugger;
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/notes" component={NotesPage} />
            <Route path="/artists/:artistId*" component={ArtistsPage} />
            <Route path="/artworks" component={ArtworksPage} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
