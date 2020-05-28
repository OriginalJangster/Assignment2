import React from "react";
import { connect } from "react-redux";
import { addToList} from "../actions";
import { clearList} from "../actions";

class InputField extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "Write a new message here!"
        }
    }
    updateMessageHandler = (event) => {
        if (event.target.value === "") {
            alert("You must write something!");
        } else {
            this.setState({message: event.target.value});
        }
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting");
    }

    render() {
        return (<div id="new-item-area">
            <div id="myDIV" className="header">
                <h2>My Sounding Board</h2>
                <form id="myMessage" onSubmit={this.mySubmitHandler}>
                    <input type="text" id="myInput" value={this.state.message} onChange={this.updateMessageHandler}></input>
                        <span onClick={() => this.props.addToList(document.getElementById("myInput").value)} className="add-button">Add</span>
                        <span onClick={() => this.props.clearList(document.getElementsByTagName("LI"))} className="clear-button">Clear</span>
                </form>
            </div>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.messageList
    }
}

export default connect(mapStateToProps, { addToList }, { clearList }) (InputField);