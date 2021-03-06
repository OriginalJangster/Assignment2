import React from "react";
import { connect } from "react-redux";
import MessageArea from "./MessageArea";
import {addToList} from "../actions";

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    changeHandler = (event) => {
        this.setState({value: event.target.value});
    };

    submitHandler = (event) => {
        if (!this.state.value.replace(/\s/g, '').length) {
            event.preventDefault();
            alert("You must write something!");
            this.setState({value: ""});
        } else {
            event.preventDefault();
            this.props.addToList(this.state.value);
            this.setState({value: ""});
        }
    };

    clearField = () => {
        this.setState({value: ""});
    };

    render() {
        return (<div className={"input-field"}>
            <div>
                <form onSubmit={this.submitHandler}>
                    <input placeholder="Write new message here!" type="text" value={this.state.value} onChange={this.changeHandler} />
                    <button className={"add-button"} type="submit">Add</button>
                    <button className={"clear-button"} onClick={() => {this.clearField()}}>Clear</button>
                </form>
            </div>
            <MessageArea/>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        currentMessages: state.list.messages
    }
};

const mapDispatchToProps =  {
    addToList
};

export default connect(mapStateToProps, mapDispatchToProps) (InputField);