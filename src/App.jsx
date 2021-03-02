import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import PeopleId from "./pages/PeopleId";
import Films from "./pages/Films";
import FilmId from "./pages/FilmId";
import Navbar from "./components/Navbar";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/People">
                    <People />
                </Route>
                <Route exact path="/People/:peopleid">
                    <PeopleId />
                </Route>
                <Route exact path="/Films">
                    <Films />
                </Route>
                <Route exact path="/Films/:filmid">
                    <FilmId />
                </Route>
                <Route path="*">
                    {() => <h1>404 Not Found :(</h1>}
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;