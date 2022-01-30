import Home from "./Home/Home";
import 'rsuite/dist/rsuite.min.css';
import { Route , Switch } from 'react-router';
import Category from "./Category/Category";
import CategoryItems from "./Category/CategoryItems";
import NavBarList from "./NavBarList/NavBarList";
import React from "react";
import './App.css';
import Cart from "./Cart/Cart";

function App() {

    return (
            <>
                <div className="head" >
                    <h1 >White Crabs</h1>
                </div>            
                <NavBarList/>
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
                    <Route exact path='/cart' >
                        <Cart />
                    </Route>

                </Switch>
            </>
    );
}

export default App;
