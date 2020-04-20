import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/githubState";

function App() {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <NavBar/>
                    <div className='container pt-4'>
                        <Alert alert={{text: 'test alert'}}/>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/about' component={About}/>
                            <Route path='/profile/:name' component={Profile}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    );
}

export default App;
