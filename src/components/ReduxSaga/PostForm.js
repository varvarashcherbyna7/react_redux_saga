import React from 'react';
import { connect } from 'react-redux';
import createPosts, {showAlert} from "../../redux/action";

 class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    submitHandler = event => {
        event.preventDefault();
        const {title} = this.state;

        if(!title.trim()){
           return this.props.showAlert('Название поста не может быть пустым')
        }
        const newPost = {
            title, id: Date.now().toString(),
        }
        console.log(newPost);
        this.props.createPosts(newPost);
        this.setState({title: ''})

    }


    changeInputHandler = event => {
        event.persist();
        this.setState(prev => ({
                ...prev, ...{[event.target.name]: event.target.value}
            })
        )
    }

    render() {

        return (
            <form onSubmit={this.submitHandler}>

                {this.props.alert && <div className="alert alert-warning" role="alert">
                    {this.props.alert}
                </div>}

                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           value={this.state.title}
                           name="title"
                           onChange={this.changeInputHandler}
                    />
                </div>
                <div style={{marginTop: '1rem'}}>
                    <button className="btn btn-success" type="submit">Создать</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps =  {
        createPosts, showAlert
}

const mapStateToProps = state => ({
     alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
