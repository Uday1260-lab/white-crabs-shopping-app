import Home from "./Home/Home";
import 'rsuite/dist/rsuite.min.css';
import { Route , Switch } from 'react-router';
import Category from "./Category/Category";
import CategoryItems from "./Category/CategoryItems";
import NavBarList from "./NavBarList/NavBarList";
import React from "react";
import './App.css';
import Cart from "./Cart/Cart";
import { CartProvider } from "./Context/Item.context";

function App() {

    return (
            <>
                <div className="head" >
                    <h1 >White Crabs</h1>
                </div>            
                <NavBarList/>
                    <CartProvider>
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route exact path='/category'>
                                <Category />
                            </Route>
                            <Route exact path='/category/:catId'>
                                <CategoryItems />
                            </Route>
                            <Route exact path='/cart' >
                                <Cart />
                            </Route>
                        </Switch>
                    </CartProvider>
            </>
    );
}

export default App;
