import React from "react";
import { connect } from "react-redux";
import ListArea from "./MessageArea";

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    changeHandler = (event) => {
        this.setState({value: event.target.value});
    }

    submitHandler = (event) => {
        if (this.state.value === "") {
            event.preventDefault();
            alert("You must write something!");
        } else {
            event.preventDefault();
            alert('A message was added to the list: ' + this.state.value);
            this.props.addToList(this.state.value);
            this.setState({value: ""});
        }
    }

    clearField = () => {
        this.setState({value: ""});
    }

    render() {
        return (<div className={"input-field"}>
            <div>
                <form onSubmit={this.submitHandler}>
                    <input placeholder="New Item" type="text" value={this.state.value} onChange={this.changeHandler} />
                    <button className={"add-button"} type="submit">Add</button>
                    <button className={"clear-button"} onClick={() => {this.clearField()}}>Clear</button>
                </form>
            </div>
            <ListArea todos={this.props.currentMessages} />
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        currentMessages: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        addToList: (message) => dispatch({ type: 'ADD_TO_LIST', payload: message })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (InputField);