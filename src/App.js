import Home from "./Home/Home";
import 'rsuite/dist/rsuite.min.css';
import { Route , Switch } from 'react-router';
import Category from "./Category/Category";
import CategoryItems from "./Category/CategoryItems";
import NavBar from "./NavBar/NavBar";
import React from "react";
import './App.css'

function App() {

    return (
            <>
                <div className="head" >
                    <h1 >White Crabs</h1>
                </div>            
                <NavBar/>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/category'>
                        <Category />
                    </Route>
                    <Route exact path='/category/:categoryId'>
                        <CategoryItems />
                    </Route>
                </Switch>
            </>
    );
}

export default App;
