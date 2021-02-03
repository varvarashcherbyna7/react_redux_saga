import React from 'react';

export default class Modal extends React.Component {

    state = {
        isOpen: false
    }

    render() {
        return (
            <>
                <button className="modalBtnOpen" onClick={() => this.setState({isOpen: true})}>Open Modal</button>

                {this.state.isOpen && (<div className="modal">
                            <div className="modalBody">
                                <h1>Modal title</h1>
                                <p>I am awesome modal</p>
                                <button onClick={() => this.setState({isOpen: false})} className="modalBtnClose">Close modal</button>
                            </div>
                        </div>)}

            </>

        )
    }
}

