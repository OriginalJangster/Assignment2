import React from "react";
import { connect } from "react-redux";
import DetailedView from "./DetailedView";

class ListArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currMsg: ""
        }
    }

    itemDetails = (item, messages) => {
        console.log('REACHED ITEM DETAILS');
        // return <DetailedView activeMessage={item} messagesSoFar={messages} openDetails={this.props.viewDetails} />
        // this.props.viewDetails(item, messages);
        let active = this.props.viewDetails(item, messages);
        this.setState({currMsg: active});
    }

    render() {
        console.log(this.props.currentMessages.messages); // correctly updating
        let currMessages = this.props.todos.messages;
        return (
            <div>
                <ul>
                    {this.props.todos.messages.map(message => (
                        <li onClick={() => this.itemDetails(message, currMessages)} key={message + (Math.floor(Math.random() * Math.floor(100)))}>
                            {message}
                            <button onClick={() => this.props.removeItem(message)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <button onClick={this.props.clearList}>Clear List</button>
                <DetailedView activeCurr={this.props.activeMsg}>Item Details: </DetailedView>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentMessages: state.list,
        activeMsg: state.item
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        clearList: () => dispatch({ type: 'CLEAR_LIST'}),
        viewDetails: (item, messages) => dispatch({type: 'VIEW_DETAILS', payload: item, totalMessages: messages})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ListArea);