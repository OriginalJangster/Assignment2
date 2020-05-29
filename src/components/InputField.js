import React from "react";
import { connect } from "react-redux";

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    changeHandler = (event) => {
        if (event.target.value === "") {
            alert("You must write something!");
        } else {
            this.setState({value: event.target.value});
        }
    }

    submitHandler = (event) => {
        if (this.state.value === "") {
            alert("You must write something!");
        } else {
            event.preventDefault();
            alert('A message was added to the list: ' + this.state.value);
            this.props.addToList(this.state.value);
            console.log(this.props.messages);
            // how do i re-render listarea?
            this.setState({value: ""});
        }
    }

    render() {
        return (<div currentlist={this.props.messages}>
            <div>
                <h1>My Sounding Board</h1>
                <form onSubmit={this.submitHandler}>
                    <label>
                        New Message:
                        <input placeholder="write something" type="text" value={this.state.value} onChange={this.changeHandler} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.list.messages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        addToList: (message) => dispatch({ type: 'ADD_TO_LIST', payload: message })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (InputField);