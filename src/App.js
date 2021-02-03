import React from 'react';
import './App.sass';
import Navbar from "./components/Navbar";
import Todo from "./components/Todo/Todo";
import {Route} from 'react-router-dom';
import Modal from "./components/Modal/Modal";
import ReduxSaga from "./components/ReduxSaga/ReduxSaga";

function App() {

    return (
        <div className="container">
            <Navbar/>
            <Route path="/reactjs_redux_saga/modal" render={() => <Modal/>}/>
            <Route path="/reactjs_redux_saga/todo_list" render={() => <Todo/>}/>
            <Route path="/reactjs_redux_saga/redux_saga" render={() => <ReduxSaga/>}/>
        </div>
    );
}

export default App;
