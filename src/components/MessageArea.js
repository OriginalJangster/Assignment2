import React from "react";
import { connect } from "react-redux";
import Message from "./Message";
import {clearList, deleteFromList, getMessages} from "../actions";

class MessageArea extends React.Component {

    componentDidMount() {
        this.props.getMessages();
    };

    deleteItem = (id) => {
        this.props.deleteFromList(id);
    };

    render() {
        if (this.props.loading) {
            return <div>Loading</div>
        }
        return (
            <div className={"todolist-main"}>
                <ul>
                    {this.props.currentMessages.map(message => (
                        <Message key={Math.random()} obj={message} removeMsg={this.deleteItem}/>
                        ))}
                </ul>
                <button className={"clear-all-button"} onClick={this.props.clearList} >Clear List</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentMessages: state.list.messages,
        loading: state.list.loading
    }
};

const mapDispatchToProps = {
    clearList,
    deleteFromList,
    getMessages
};

export default connect(mapStateToProps, mapDispatchToProps) (MessageArea);