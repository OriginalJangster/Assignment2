import React from "react";
import { connect } from "react-redux";
import ListArea from "./ListArea";

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
            event.preventDefault();
            alert("You must write something!");
        } else {
            event.preventDefault();
            alert('A message was added to the list: ' + this.state.value);
            this.props.addToList(this.state.value);
            this.setState({value: ""});
        }
    }

    deleteItem = (item) => {
        console.log("HI FROM DELETE");
        this.props.deleteFromList(item);
        console.log('AFTER REDUCER');
        console.log(this.props.currentMessages); // not updating correctly
    }

    clearField = () => {
        this.setState({value: ""});
    }

    render() {
        return (<div>
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>
                        New Message:
                        <input placeholder="write something" type="text" value={this.state.value} onChange={this.changeHandler} />
                    </label>
                    <button type="submit">Add</button>
                </form>
                <button onClick={() => {this.clearField()}}>Clear</button>
            </div>
            <ListArea todos={this.props.currentMessages} removeItem={this.deleteItem} />
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
        addToList: (message) => dispatch({ type: 'ADD_TO_LIST', payload: message }),
        deleteFromList: (item) =>  dispatch({ type: 'DELETE_FROM_LIST', payload: item}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (InputField);