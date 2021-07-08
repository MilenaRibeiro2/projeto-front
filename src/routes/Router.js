import React from 'react'
import {Switch, Route} from 'react-router-dom'
import MusicDetail from '../pages/MusicDetail/MusicDetail'
import Login from '../pages/Login/Login'
import AddMusic from '../pages/AddMusic/AddMusic'
import MusicList from '../pages/MusicList/MusicList'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import SignUp from '../pages/SignUp/SignUp'

const Router = ({setRightButtonText}) => {
    return (
        <Switch>
            <Route exact path="/login">
                <Login setRightButtonText={setRightButtonText}/>
            </Route>
            <Route exact path="/cadastro">
                <SignUp setRightButtonText={setRightButtonText}/>
            </Route>
            <Route exact path="/">
                <MusicList />
            </Route>
            <Route exact path="/adicionar-musica">
                <AddMusic />
            </Route>
            <Route exact path="/detalhe/:id">
                <MusicDetail />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}

export default Router