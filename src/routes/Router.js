import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MusicDetail from '../pages/MusicDetail/MusicDetail'
import Login from '../pages/Login/Login'
import AddMusic from '../pages/AddMusic/AddMusic'
import MusicList from '../pages/MusicList/MusicList'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import SignUp from '../pages/SignUp/SignUp'
import Header from '../components/Header/Header'

const Router = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/cadastro">
                    <SignUp/>
                </Route>
                <Route exact path="/">
                    <MusicList/>
                </Route>
                <Route exact path="/adicionar-musica">
                    <AddMusic/>
                </Route>
                <Route exact path="/detalhe/:id">
                    <MusicDetail/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router