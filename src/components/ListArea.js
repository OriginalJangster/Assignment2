import React from "react";
import { connect } from "react-redux";

class ListArea extends React.Component {

    // deleteRow = (message) => {
    //     let index = this.props.messages.indexOf(message);
    //     this.props.messages.splice(index, 1);
    //     console.log(this.props.messages);
    // }

    render() {
        console.log(this.props.currentMessages.messages);
        return (
            <ul>
                {this.props.currentMessages.messages.map(message => (
                    <li uniqueID={(Math.floor(Math.random() * Math.floor(100)))} key={message + (Math.floor(Math.random() * Math.floor(100)))}>
                        {message}
                        {/*<button onClick={(e) => this.deleteRow(message)}>Delete</button>*/}
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // messages: state.list.messages
        currentMessages: state.list
    }
}

export default connect(mapStateToProps) (ListArea);