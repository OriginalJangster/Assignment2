import React from "react";
import { connect } from "react-redux";
import Message from "./Message";

class MessageArea extends React.Component {

    deleteItem = (item) => {
        this.props.deleteFromList(item);
    }

    render() {
        return (
            <div className={"todolist-main"}>
                <ul>
                    {this.props.todos.messages.map(message => (
                        <Message key={message + (Math.floor(Math.random() * Math.floor(100)))}
                            message={message} removeItem={this.deleteItem} />
                        ))}
                </ul>
                <button className={"clear-all-button"} onClick={this.props.clearList} >Clear List</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentMessages: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearList: () => dispatch({ type: 'CLEAR_LIST'}),
        deleteFromList: (item) =>  dispatch({ type: 'DELETE_FROM_LIST', payload: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MessageArea);