import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navBar">
            {/*<div className="nav-item">*/}
            {/*    <NavLink to="/reactjs_redux_saga">*/}
            {/*        Home*/}
            {/*    </NavLink>*/}
            {/*</div>*/}
            <div className="nav-item">
                <NavLink to="/reactjs_redux_saga/todo_list">
                    Todo List
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink to="/reactjs_redux_saga/modal">
                    Modal
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink to="/reactjs_redux_saga/redux_saga">
                    Redux & Saga
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
