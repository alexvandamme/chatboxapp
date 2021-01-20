import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'

import { BrowserRouter, Route, Switch } from "react-router-dom";


const Root = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Connexion} />
        <Route path='/pseudo/:pseudo' component={App} />
        <Route component={NotFound} />
        </Switch>
   </BrowserRouter> 
)

ReactDOM.render(<Root />, document.getElementById('root'))


serviceWorker.unregister()
