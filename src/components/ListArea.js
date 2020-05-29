import React from "react";
import { connect } from "react-redux";

class ListArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.messages
        }
    }

    deleteRow = (message) => {
        let index = this.props.messages.indexOf(message);
        this.props.messages.splice(index, 1);
        this.setState({value: this.props.messages});
        console.log(this.props.messages);
    }

    changeHandler = (event) => {
        this.setState({list: this.props.messages});
    }

    render() {
        return (
            <ul onChange={this.changeHandler}>
                {this.state.list.map(message => (
                    <li key={message + (Math.floor(Math.random() * Math.floor(100)))}>
                        {message}
                        <button onClick={(e) => this.deleteRow(message)}>Delete</button>
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.list.messages
    }
}

export default connect(mapStateToProps) (ListArea);